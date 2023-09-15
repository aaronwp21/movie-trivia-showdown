import { AllCategories } from "./queries";

export const getCategories = async () => {
  try {
    const data = await fetch(
      process.env['NEXT_PUBLIC_HYGRAPH_ENDPOINT'] as string,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env['NEXT_PUBLIC_HYGRAPH_TOKEN']}`,
        },
        body: JSON.stringify({
          query: AllCategories,
        }),
      },
    )
      .then((res) => res.json())
      .catch((err) => console.log(err));
    return data.data;
  } catch (error) {
    console.error(error);
  }
};