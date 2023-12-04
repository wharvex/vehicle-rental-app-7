import Layout from "../../components/my-layout";
import AccountMain from "@/app/my-account/account-main";

export default async function Page() {
  return (
    <Layout
      layoutBoxSizing="border-box"
      layoutBoxSizing1="border-box"
      headerPageBoxSizing="border-box"
      mainChild1={<AccountMain />}
    />
  );
}
