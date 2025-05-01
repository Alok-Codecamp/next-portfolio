// export const generateMetadata = async ({ params, url, title }: { params: Promise<{ paramName: string }>; url: string, paramName: string, title: string }) => {
//     const id = (await params).paramName;
//     const res = await fetch(`${url}/${id}`);
//     const data = await res.json();
//     return {
//         title: data?.data[title],
//         description: data?.data?.description
//     }
// }