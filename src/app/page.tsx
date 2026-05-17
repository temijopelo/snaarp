"use client";
import CloudNetwork from "../components/sections/CloudNetwork";
import DeviceManagement from "../components/sections/DeviceMgtDash";
import ProductivityReport from "../components/sections/ProductivityReport";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import SectionItem from "../components/dashboard/SectionItem";
import React, { useCallback, useState } from "react";

export default function Home() {
  const sectionsInitial = [
    { id: "cloud", node: <CloudNetwork /> },
    { id: "device", node: <DeviceManagement /> },
    { id: "prod", node: <ProductivityReport /> },
  ];

  const [sections, setSections] = useState(sectionsInitial);

  const moveSection = useCallback((from: number, to: number) => {
    setSections((prev) => {
      const copy = [...prev];
      const [moved] = copy.splice(from, 1);
      copy.splice(to, 0, moved);
      return copy;
    });
  }, []);

  return (
    <DndProvider backend={HTML5Backend}>
      <div>
        {sections.map((s, idx) => (
          <SectionItem
            key={s.id}
            id={s.id}
            index={idx}
            moveSection={moveSection}
          >
            {s.node}
          </SectionItem>
        ))}
      </div>
    </DndProvider>
  );
}
