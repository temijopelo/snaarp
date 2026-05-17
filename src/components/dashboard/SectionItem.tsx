"use client";
import React, { useRef } from "react";
import { useDrag, useDrop } from "react-dnd";

type SectionItemProps = {
  id: string;
  index: number;
  moveSection: (from: number, to: number) => void;
  children: React.ReactNode;
};

const SectionItem = ({
  id,
  index,
  moveSection,
  children,
}: SectionItemProps) => {
  const ref = useRef<HTMLDivElement | null>(null);

  const [{ isDragging }, drag] = useDrag({
    type: "SECTION",
    item: { id, index },
    collect: (monitor) => ({ isDragging: monitor.isDragging() }),
  });

  const [, drop] = useDrop({
    accept: "SECTION",
    hover(item: any, monitor) {
      if (!ref.current) return;
      const dragIndex = item.index;
      const hoverIndex = index;
      if (dragIndex === hoverIndex) return;
      const hoverBoundingRect = ref.current.getBoundingClientRect();
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      if (!clientOffset) return;
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) return;
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) return;
      moveSection(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });

  drag(drop(ref));

  return (
    <div
      ref={ref}
      className={`mb-4 ${isDragging ? "opacity-50" : "opacity-100"}`}
    >
      {children}
    </div>
  );
};

export default SectionItem;
