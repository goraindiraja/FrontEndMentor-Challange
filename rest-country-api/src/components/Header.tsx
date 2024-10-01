"use client"

import React, { useState } from 'react'
import { Button } from './ui/button'
import { IoMoon, IoSunny } from 'react-icons/io5'
import { useTheme } from "next-themes"

export const Header = () => {
    const [currentTheme, setCurrentTheme] = useState('dark')
    const {setTheme} = useTheme()

    const changeTheme = () => {
        if(currentTheme === "dark"){
            setTheme('light')
            setCurrentTheme('light')
        } else {
            setTheme('dark')
            setCurrentTheme('dark')
        }
    }

    return (
        <header className="flex items-center w-full h-20 bg-element sticky top-0 z-10 mb-4">
            <div className='container mx-auto flex items-center justify-between px-6'>
                <h1 className="font-bold">Where in the world ?</h1>

                <Button
                    variant={"ghost"}
                    onClick={changeTheme}
                >
                    {
                        currentTheme === 'dark' ? 
                            (<span className='flex'> 
                                <IoMoon className="mr-4 text-lg" /> Dark Mode
                            </span>) : (

                            <span className='flex'>
                                <IoSunny className="mr-4 text-lg" /> Light Mode
                            </span> 
                        ) 
                        
                    }
                </Button>
            </div>
        </header>
    )
}
