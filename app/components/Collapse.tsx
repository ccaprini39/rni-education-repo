'use client'

import { useState } from "react"

import { upCarat, downCarat } from "./icons/arrowIcons";

export default function Collapse({ children, defaultCollapsed = false, title = '' }: { children: React.ReactNode ; defaultCollapsed?: boolean, title?: string })  {

  const [collapsed, setCollapsed] = useState(defaultCollapsed)

  function CollapseButton() {
    return (
      <button 
        className="btn btn-primary flex flex-row items-center"
        onClick={() => setCollapsed(!collapsed)}
      >
        {title && title + ' '}
        {collapsed ? downCarat() : upCarat()}
      </button>
    )
  }


  //this will be a component that will display the input and a clickable button that will collapse the input

  //if the input is a string, then it will be displayed as is
  //if the input is an object, then it will be displayed as a json object using JSON.stringify(input, null, 2) in a <pre> tag

  //the button will be a clickable button that will collapse the input

  return (
    <div className="w-full outline outline-1 outline-blue-300 p-1 m-2">
      <CollapseButton />
      {!collapsed && <div className="m-5">
        {children}
      </div>}
    </div>
  )

}

