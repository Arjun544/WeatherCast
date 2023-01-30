import { useState } from "react";
import { Tab } from "@headlessui/react";
import TodayTabView from "./TodayTabView";
import WeeklyTabView from "./WeeklyTabView";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function CustomTabs() {
  let [categories] = useState({
    Today: [],
    Weekly: [],
  });

  return (
    <div className="w-screen flex-grow-0 max-w-md py-8 sm:px-0 bg-white ">
      <Tab.Group>
        <Tab.List className="flex p-1 space-x-1 bg-blue-900/20 rounded-xl">
          {Object.keys(categories).map((category, index) => (
            <Tab
              key={index}
              className={({ selected }) =>
                classNames(
                  "w-full py-2.5 text-xs leading-5 font-semibold text-blue-700 rounded-lg focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-customPriColor-light ring-opacity-60",
                  selected
                    ? "bg-black text-white shadow"
                    : "text-gray-300 hover:bg-white/[0.12] hover:text-black"
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          {Object.values(categories).map((posts, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                " bg-customBgColor-light rounded-3xl p-4",
                "focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60"
              )}
            >
              {idx === 0 ? <TodayTabView /> : <WeeklyTabView />}
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
