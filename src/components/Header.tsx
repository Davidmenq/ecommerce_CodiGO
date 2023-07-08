"use client";
import Link from "next/link";
import React from "react";
import { useState } from "react";
import ListNavBar from "./ListNavBar";
import { useRecoilState } from "recoil";
import { cartState } from "@/atoms/cartState";

const renderIconsDer = () => {
  const [cartItem] = useRecoilState(cartState);
  return (
    <>
      <Link href={"/login"}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="white"
          className="w-7 h-7"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
          />
        </svg>
      </Link>
      <div className="relative cursor-pointer">
        <Link href="/cart">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="white"
              className="w-7 h-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
            <span className="absolute -top-2 -right-2 text-[13px] bg-red-600 h-[18px] w-[18px] rounded-full grid place-items-center text-white">
              {cartItem.length}
            </span>
          </div>
        </Link>
      </div>
    </>
  );
};

const Header = () => {
  /* UseState -> used for change the icons of Hamburguer menu and Close */
  const [navbar, setNavbar] = useState(false);
  return (
    <header className="sticky top-0 z-10">
      <nav className="w-full px-6 py-2 bg-gradient-to-t from-[#0F2027] bg-[#2C5364]">
        <div className="justify-between lg:w-full lg:items-center lg:flex lg:px-10">
          {/* First part */}
          <>
            {/* Hamburguer menu for mobile*/}
            <div className="flex items-center justify-between py-1.5 lg:py-0">
              <div className="lg:hidden">
                <button
                  className="p-1 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    /* Icon close */
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2.5}
                      stroke="white"
                      className="w-7 h-7"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  ) : (
                    /* Icon menu Hamburguer */
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2.5}
                      stroke="white"
                      className="w-7 h-7"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                      />
                    </svg>
                  )}
                </button>
              </div>
              <Link href={"/"}>
                <h1 className="hidden lg:block text-2xl text-[#50C2D8] font-bold">
                  Techn<span className="text-[#8AD2E1] font-bold">ology</span>
                </h1>
                <img src="/imagenes/Prueba2.png" alt="Logo" width={60} className="lg:hidden"/>
              </Link>
              <div className="flex space-x-4 lg:hidden">{renderIconsDer()}</div>
            </div>
          </>
          {/* Second part */}
          <div
            className={`flex-1 justify-self-center pb-10 mt-8 lg:block lg:pb-0 lg:mt-0 ${
              navbar ? "p-12 lg:p-0 block" : "hidden"
            }`}
          >
            <ul className="h-screen lg:h-auto items-center justify-center lg:flex ">
              <ListNavBar
                nameSection="Inicio"
                onClickReturn={() => setNavbar(!navbar)}
                url="/"
              />

              <ListNavBar
                nameSection="Productos"
                onClickReturn={() => setNavbar(!navbar)}
                url="/productos"
              />

              <ListNavBar
                nameSection="Nosotros"
                onClickReturn={() => setNavbar(!navbar)}
                url="/nosotros"
              />

              <ListNavBar
                nameSection="Contactanos"
                onClickReturn={() => setNavbar(!navbar)}
                url="/contactanos"
              />
            </ul>
          </div>
          <div className="hidden lg:flex lg:space-x-4">{renderIconsDer()}</div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
