import React, { useState, useEffect, useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { EyeOff, Eye } from "lucide-react";
const Signup = () => {
  const t = useNavigate(),
    [e, n] = React.useState({
      firstName: "",
      lastName: "",
      email: "",
      mobile: "",
      password: "",
      confirmPassword: "",
    }),
    [a, o] = React.useState({}),
    [s, c] = React.useState(!1),
    [d, u] = React.useState(!1),
    y = (v) => {
      const { name: b, value: w } = v.target;
      n((_) => ({
        ..._,
        [b]: w,
      }));
    },
    m = () => {
      let v = {};
      const b = /^\[6-9]\d{9}$/;

      e.firstName || (v.firstName = "First name is required");
      e.lastName || (v.lastName = "Last name is required");
      e.email
        ? /\S+@\S+\.\S+/.test(e.email) || (v.email = "Email is invalid")
        : (v.email = "Email is required");
      e.mobile
        ? b.test(e.mobile) ||
          (v.mobile = "Enter a valid 10 digits mobile number)")
        : (v.mobile = "Mobile number is required");
      e.password
        ? e.password.length < 6 &&
          (v.password = "Password must be at least 6 characters")
        : (v.password = "Password is required");
      e.password !== e.confirmPassword &&
        (v.confirmPassword = "Passwords do not match");
      o(v);
      return Object.keys(v).length === 0;
    },
    k = async (v) => {
      if ((v.preventDefault(), m()))
        try {
          const b = await fetch("http://localhost:5173/api/signup", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              firstName: e.firstName,
              lastName: e.lastName,
              email: e.email,
              mobile: e.mobile,
              password: e.password,
              role: "user",
            }),
          });
          if (b.ok) t("/login");
          else {
            const w = await b.json();
            console.log("Error data:", w);
            o({
              ...a,
              submit: w.error,
            });
          }
        } catch {
          o({
            ...a,
            submit: "An error occurred. Please try again.",
          });
        }
    };
  return (
    <div className="container mx-auto bg-blue-50 min-h-screen flex items-center justify-center max-w-full">
      {
        <div className="w-full max-w-md bg-[#efe5d5]/60 border border-[#2b241d]/12 backdrop-blur-md rounded-lg shadow-lg shadow-[rgba(43,36,29,0.12)]-lg">
          {
            <div className="bg-gradient-to-r from-blue-400 via-green-200 to-white -300 shadow-lg shadow-[rgba(43,36,29,0.12)]-lg backdrop-blur-sm text-[#2b241d] rounded-t-lg p-6">
              {
                <h2 className="text-2xl font-display font-semibold text-center text-[#2b241d]">
                  Sign Up as a User
                </h2>
              }
              {
                <p className="text-center !text-[#2b241d] ">
                  Create your account{" "}
                </p>
              }
            </div>
          }
          {
            <div className="p-6">
              {
                <form onSubmit={k} className="space-y-4">
                  {
                    <div className="grid grid-cols-2 gap-4">
                      {
                        <div>
                          {
                            <label
                              htmlFor="firstName"
                              className="block text-sm font-medium text-blue-800 text-left"
                            >
                              First Name
                            </label>
                          }
                          {
                            <input
                              id="firstName"
                              name="firstName"
                              value={e.firstName}
                              onChange={y}
                              className="mt-1 block w-full rounded-md border-blue-200 shadow-lg shadow-[rgba(43,36,29,0.12)]-lg shadow-lg shadow-[rgba(43,36,29,0.12)]-black/20 shadow-lg shadow-[rgba(43,36,29,0.12)]-black/10 focus:border-blue-400 focus:ring focus:ring-blue-400 focus:ring-opacity-50 pl-1 focus:text-[#2b241d] "
                              required={!0}
                            />
                          }
                          {a.firstName && (
                            <p className="text-red-500 text-xs mt-1">
                              {a.firstName}
                            </p>
                          )}
                        </div>
                      }
                      {
                        <div>
                          {
                            <label
                              htmlFor="lastName"
                              className="block text-sm font-medium text-blue-800 text-left"
                            >
                              Last Name
                            </label>
                          }
                          {
                            <input
                              id="lastName"
                              name="lastName"
                              value={e.lastName}
                              onChange={y}
                              className="mt-1 block w-full rounded-md border-blue-200 shadow-lg shadow-[rgba(43,36,29,0.12)]-lg shadow-lg shadow-[rgba(43,36,29,0.12)]-black/20 shadow-lg shadow-[rgba(43,36,29,0.12)]-black/10 focus:border-blue-400 focus:ring focus:ring-blue-400 focus:ring-opacity-50 pl-1 focus:text-[#2b241d] "
                              required={!0}
                            />
                          }
                          {a.lastName && (
                            <p className="text-red-500 text-xs mt-1">
                              {a.lastName}
                            </p>
                          )}
                        </div>
                      }
                    </div>
                  }
                  {
                    <div>
                      {
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-blue-800 text-left"
                        >
                          Email
                        </label>
                      }
                      {
                        <input
                          id="email"
                          name="email"
                          type="email"
                          value={e.email}
                          onChange={y}
                          className="mt-1 block w-full rounded-md border-blue-200 shadow-lg shadow-[rgba(43,36,29,0.12)]-lg shadow-lg shadow-[rgba(43,36,29,0.12)]-black/20 shadow-lg shadow-[rgba(43,36,29,0.12)]-black/10 focus:border-blue-400 focus:ring focus:ring-blue-400 focus:ring-opacity-50 pl-1 focus:text-[#2b241d] "
                          required={!0}
                        />
                      }
                      {a.email && (
                        <p className="text-red-500 text-xs mt-1">{a.email}</p>
                      )}
                    </div>
                  }
                  {
                    <div>
                      {
                        <label
                          htmlFor="mobile"
                          className="block text-sm font-medium text-blue-800 text-left"
                        >
                          Mobile Number
                        </label>
                      }
                      {
                        <input
                          id="mobile"
                          name="mobile"
                          type="text"
                          value={e.mobile}
                          onChange={y}
                          placeholder="987XXXX098"
                          className={`mt-1 block w-full rounded-md shadow-lg shadow-[rgba(43,36,29,0.12)]-lg shadow-lg shadow-[rgba(43,36,29,0.12)]-black/20 shadow-lg shadow-[rgba(43,36,29,0.12)]-black/10 pl-1 focus:text-[#2b241d] ${a.mobile ? "border-red-500 focus:border-red-500 focus:ring-red-400" : "border-blue-200 focus:border-blue-400 focus:ring-blue-400"}`}
                          required={!0}
                        />
                      }
                      {a.mobile && (
                        <p className="text-red-500 text-xs mt-1">{a.mobile}</p>
                      )}
                    </div>
                  }
                  {
                    <div>
                      {
                        <label
                          htmlFor="password"
                          className="block text-sm font-medium text-blue-800 text-left"
                        >
                          Password
                        </label>
                      }
                      {
                        <div className="flex items-center">
                          {
                            <input
                              id="password"
                              name="password"
                              type={s ? "text" : "password"}
                              value={e.password}
                              onChange={y}
                              className="mt-1 block w-full rounded-md border-blue-200 shadow-lg shadow-[rgba(43,36,29,0.12)]-lg shadow-lg shadow-[rgba(43,36,29,0.12)]-black/20 shadow-lg shadow-[rgba(43,36,29,0.12)]-black/10 focus:border-blue-400 focus:ring focus:ring-blue-400 focus:ring-opacity-50 pl-1 focus:text-[#2b241d] "
                              required={!0}
                            />
                          }
                          {
                            <button
                              type="button"
                              className="ml-2 text-blue-600 hover:text-blue-800 focus:outline-none focus:shadow-lg shadow-[rgba(43,36,29,0.12)]-outline"
                              onClick={() => c(!s)}
                            >
                              {s ? <EyeOff /> : <Eye />}
                            </button>
                          }
                        </div>
                      }
                      {a.password && (
                        <p className="text-red-500 text-xs mt-1">
                          {a.password}
                        </p>
                      )}
                    </div>
                  }
                  {
                    <div>
                      {
                        <label
                          htmlFor="confirmPassword"
                          className="block text-sm font-medium text-blue-800 text-left"
                        >
                          Confirm Password
                        </label>
                      }
                      {
                        <div className="flex items-center">
                          {
                            <input
                              id="confirmPassword"
                              name="confirmPassword"
                              type={d ? "text" : "password"}
                              value={e.confirmPassword}
                              onChange={y}
                              className="mt-1 block w-full rounded-md border-blue-200 shadow-lg shadow-[rgba(43,36,29,0.12)]-lg shadow-lg shadow-[rgba(43,36,29,0.12)]-black/20 shadow-lg shadow-[rgba(43,36,29,0.12)]-black/10 focus:border-blue-400 focus:ring focus:ring-blue-400 focus:ring-opacity-50 pl-1 focus:text-[#2b241d] "
                              required={!0}
                            />
                          }
                          {
                            <button
                              type="button"
                              className="ml-2 text-blue-600 hover:text-blue-800 focus:outline-none focus:shadow-lg shadow-[rgba(43,36,29,0.12)]-outline"
                              onClick={() => u(!d)}
                            >
                              {d ? <EyeOff /> : <Eye />}
                            </button>
                          }
                        </div>
                      }
                      {a.confirmPassword && (
                        <p className="text-red-500 text-xs mt-1">
                          {a.confirmPassword}
                        </p>
                      )}
                    </div>
                  }
                  {
                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-blue-400 via-green-200 to-white -300 shadow-lg shadow-[rgba(43,36,29,0.12)]-lg backdrop-blur-sm hover:bg-blue-700 text-[#2b241d] font-display font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-lg shadow-[rgba(43,36,29,0.12)]-outline"
                    >
                      Create Account
                    </button>
                  }
                </form>
              }
            </div>
          }
          {
            <div className="bg-blue-50 px-6 py-4 rounded-b-lg">
              {
                <p className="text-sm text-blue-600 text-center">
                  Already have an account?{" "}
                  {
                    <button
                      onClick={() => t("/login")}
                      className="text-blue-600 font-semibold hover:underline"
                    >
                      Log in
                    </button>
                  }
                </p>
              }
              {a.submit && (
                <p className="text-red-500 text-xs mt-1">{a.submit}</p>
              )}
            </div>
          }
        </div>
      }
    </div>
  );
};
export default Signup;
