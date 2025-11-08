import Experience from "@/components/Experience";
import Tutorials from "@/components/Tutorials";
import Articles from "@/components/Articles";
import ExtraWorks from "@/components/ExtraWorks";
import Recommendations from "@/components/Recommendations"
export const metadata = {
  title: "Home-AliBordbar",
  description: "page description"
};
export default async function Home() {
  return (
    <>
      <Experience />
      <Tutorials />
      <Articles />
      <ExtraWorks />
      <Recommendations />
    </>
  )
}