import Page from "./dashboard/dashboard"; //^dashboard Home
import Pages from "./pages/pages"; //^Home - History =haeder(navbar)

export default function Home() {
  return (
    <>
      <Pages />
      <Page />
    </>
  );
}
