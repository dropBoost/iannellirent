'use client'

import { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";

export function MenuHeader () {

  const [open, setOpen] = useState(false)
  
  return (
    <>
    <div className="lg:flex hidden">
      MENU
    </div>
    <div className="lg:hidden">
      <FaBars/>
    </div>
    </>
  )
}