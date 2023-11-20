import Layout from "../../components/my-layout";
import MainContentTestDB2 from "@/components/main-content-test-db-2";

export default async function Page() {
  return (
    <Layout
      layoutBoxSizing="border-box"
      layoutBoxSizing1="border-box"
      headerPageBoxSizing="border-box"
      mainChild1={<MainContentTestDB2 />}
    />
  );
}

// <ul>
//   {feed.map((customer) => (
//     <li key={customer.id}>{customer.name}</li>
//   ))}
// </ul>
