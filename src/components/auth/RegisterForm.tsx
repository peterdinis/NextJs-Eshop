"use client"

import Link from "next/link";
import Header from "../shared/Header";
import Navbar from "../shared/Navbar";

const RegisterForm: React.FC = () => {

    return (
        <>
            <Navbar />
            <Header name="Register" />
            <form>
                <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
                    <div className="mb-4">
                        <div className="mb-2">
                            <label
                                className="block text-grey-darker text-sm font-bold mb-2"
                                htmlFor="password"
                            >
                                Email
                            </label>
                            <input
                                className="passwordInput shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3"
                                id="Email"
                                type="text"
                                autoFocus
                                placeholder="Email"
                            />
                        </div>

                        <div className="mb-2">
                            <label
                                className="block text-grey-darker text-sm font-bold mb-2"
                                htmlFor="password"
                            >
                                Heslo
                            </label>
                            <input
                                className="passwordInput shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3"
                                id="Heslo"
                                type="password"
                                autoFocus
                                autoComplete="current-password"
                                placeholder="********************************************"
                            />
                        </div>
                        <div>
                            <button
                                className="mt-4 bg-red-700 rounded-lg p-2 text-white"
                                type="submit"
                            >
                                Prihlásenie
                            </button>
                            <div>
                                <Link
                                    className="mt-4 inline-block align-baseline font-bold text-2xl text-blue hover:text-blue-darker"
                                    href="/admin/register"
                                >
                                    Registrácia
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}

export default RegisterForm;