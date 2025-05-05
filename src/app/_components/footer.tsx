"use client"
import Link from "next/link"
import React from "react"

const Footer = () => {
    return (

        <footer className="border-t border-gray-800 bg-gray-950 py-12">
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
                    <div className="flex items-center gap-2">
                        <span className="text-lg font-bold">GitBetter</span>
                    </div>
                    <div className="text-sm text-gray-500 flex flex-col justify-right md:items-end items-center">
                        <div>© {new Date().getFullYear()} GitBetter. All rights reserved.</div>
                        <Link className="hover:text-white" href="https://github.com/gaurav1452001" target="_blank">Built by Gaurav</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer