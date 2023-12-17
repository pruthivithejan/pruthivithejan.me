// import LinkPreview from "@ashwamegh/react-link-preview";
// import { Skeleton } from "@/components/ui/skeleton";

// function CustomComponent({ loading, preview }) {
//   return loading ? (
//     <div className="flex items-center space-x-4">
//       <Skeleton className="h-12 w-12 rounded-full" />
//       <div className="space-y-2">
//         <Skeleton className="h-4 w-[250px]" />
//         <Skeleton className="h-4 w-[200px]" />
//       </div>
//     </div>
//   ) : (
//     <div>
//       <p>Domain: {preview.domain}</p>
//       <p>Title: {preview.title}</p>
//       <p>Description: {preview.description}</p>
//       <img height="100px" width="100px" src={preview.img} alt={preview.title} />
//     </div>
//   );
// }

// function PriviewLinks() {
//   return (
//     <LinkPreview
//       url="https://www.youtube.com/watch?v=CgruI1RjH_c"
//       render={CustomComponent}
//     />
//   );
// }

// export default PriviewLinks;

import { useState, useEffect } from "react";

function LinkPreview({ url }) {
  const [previewData, setPreviewData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.text();
        const parser = new DOMParser();
        const doc = parser.parseFromString(data, "text/html");
        const title = doc.querySelector("title")?.textContent || "";
        const description =
          doc
            .querySelector('meta[name="description"]')
            ?.getAttribute("content") || "";
        const image =
          doc
            .querySelector('meta[property="og:image"]')
            ?.getAttribute("content") || "";

        setPreviewData({ title, description, image });
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!previewData) {
    return <p>Failed to fetch link preview.</p>;
  }

  const handleClick = () => {
    window.open(url, "_blank");
  };

  return (
    <div onClick={handleClick} style={{ cursor: "pointer" }}>
      <h3>{previewData.title}</h3>
      <p>{previewData.description}</p>
      {previewData.image && <img src={previewData.image} alt="Link Preview" />}
    </div>
  );
}

export default LinkPreview;
