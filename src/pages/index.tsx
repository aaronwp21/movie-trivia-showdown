import Layout from "@/components/Layout";
import { getCategories } from "@/lib/hygraph/requests";
import { hygraphData } from "@/lib/types";

export default function Home({ data }:hygraphData) {
  return (
    <Layout>
      <div>Home</div>
    </Layout>
  )
}

export async function getStaticProps() {
  const data = await getCategories();

  return {
    props: {
      data
    }
  }
}
