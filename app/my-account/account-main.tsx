"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Account = () => {
  const RenderContent = () => {
    const pathname = usePathname();

    switch (pathname) {
      case "/account/userInfo":
        return (
          <div>
            <h1>User Information</h1>
          </div>
        );
      case "/account/driverLicense":
        return (
          <div>
            <h1>Driver License</h1>
          </div>
        );
      case "/account/carInsurance":
        return (
          <div>
            <h1>Car Insurance</h1>
          </div>
        );
      default:
        return (
          <div>
            <h1>Welcome to Account Settings!</h1>
            <p>Select an option from the sidebar.</p>
          </div>
        );
    }
  };

  return (
    <div className="flex">
      <div className="bg-gray-200 h-screen w-1/4 p-4">
        <ul>
          <li>
            <Link href="/account/userInfo">User Information</Link>
          </li>
          <li>
            <Link href="/account/driverLicense">Driver License</Link>
          </li>
          <li>
            <Link href="/account/carInsurance">Car Insurance</Link>
          </li>
        </ul>
      </div>
      <div className="w-3/4 p-4">{RenderContent()}</div>
    </div>
  );
};

export default Account;
