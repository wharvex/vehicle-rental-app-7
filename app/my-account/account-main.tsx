import Link from 'next/link';
import { useNavigation } from 'next/navigation';

const Account = () => {
  const navigation = useNavigation();

  const renderContent = () => {
    const { pathname } = navigation;

    switch (pathname) {
      case '/account/userInfo':
        return (
          <div>
            <h1>User Information</h1>
          </div>
        );
      case '/account/driverLicense':
        return (
          <div>
            <h1>Driver License</h1>
          </div>
        );
      case '/account/carInsurance':
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
            <Link href="/account/userInfo">
              <a>User Information</a>
            </Link>
          </li>
          <li>
            <Link href="/account/driverLicense">
              <a>Driver License</a>
            </Link>
          </li>
          <li>
            <Link href="/account/carInsurance">
              <a>Car Insurance</a>
            </Link>
          </li>
        </ul>
      </div>
      <div className="w-3/4 p-4">{renderContent()}</div>
    </div>
  );
};

export default Account;
