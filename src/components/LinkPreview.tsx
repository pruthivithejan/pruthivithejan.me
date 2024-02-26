import { useState, useEffect } from "react";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const LinkPreview = ({ dataIn }) => {
  const [linkData, setLinkData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      // Check if the link is present in the JSON file
      const isLinkCached = await isLinkInCache(dataIn);

      if (isLinkCached) {
        // If link is cached, load data from the JSON file
        const cachedData = await getLinkFromCache(dataIn);
        setLinkData(cachedData);
      } else {
        // If link is not cached, fetch data from the API
        const data = {
          q: dataIn,
        };

        try {
          const response = await fetch("https://api.linkpreview.net", {
            method: "POST",
            headers: {
              "X-Linkpreview-Api-Key": "ba26556ae9cd3ab163eb247c6bdad036",
              "Content-Type": "application/json",
            },
            mode: "cors",
            body: JSON.stringify(data),
          });

          if (response.status !== 200) {
            console.log(response);
            console.log(response.status);
            throw new Error("Something went wrong");
          }

          const linkPreviewData = await response.json();
          setLinkData(linkPreviewData);

          // Update the JSON file with the new data
          await updateCache(dataIn, linkPreviewData);
        } catch (error) {
          console.error(error);
        }
      }
    };

    fetchData();
  }, [dataIn]);

  return (
    <div className="font-body ">
      {linkData ? (
        <a href={linkData.url} target="_blank">
          <Card className="flex items-center space-x-4 bg-neutral-900 text-neutral-100 p-2">
            <div className="w-24 h-24 flex-shrink-0">
              <img
                alt={linkData.title}
                className="w-full h-full object-cover rounded-lg"
                height="96"
                src={linkData.image}
                style={{
                  aspectRatio: "96/96",
                  objectFit: "cover",
                }}
                width="96"
              />
            </div>
            <div className="flex-1 space-y-1">
              <CardTitle className="text-lg font-semibold">
                {linkData.title}
              </CardTitle>
              <CardDescription className="text-sm text-gray-500 dark:text-gray-400">
                {linkData.description}
              </CardDescription>
            </div>
          </Card>
        </a>
      ) : (
        <Card className="flex items-center space-x-4 bg-neutral-900 p-2">
          <div className="w-24 h-24 flex-shrink-0">
            <Skeleton className="w-24 h-24 rounded-lg" />
          </div>
          <div className="flex-1 space-y-1">
            <Skeleton className="h-4 w-[250px]" />
            <Skeleton className="h-4 w-[200px]" />
          </div>
        </Card>
      )}
    </div>
  );
};

// // Utility function to check if the link is present in the JSON file
// const isLinkInCache = async (link) => {
//   try {
//     // Assuming you are using localStorage for simplicity
//     const cachedData = localStorage.getItem("linkCache");
//     if (cachedData) {
//       const parsedCache = JSON.parse(cachedData);
//       return parsedCache.hasOwnProperty(link);
//     }
//     return false;
//   } catch (error) {
//     console.error("Error checking link in cache:", error);
//     return false;
//   }
// };

// // Utility function to get link data from the JSON file
// const getLinkFromCache = async (link) => {
//   try {
//     // Assuming you are using localStorage for simplicity
//     const cachedData = localStorage.getItem("linkCache");
//     if (cachedData) {
//       const parsedCache = JSON.parse(cachedData);
//       return parsedCache[link] || null;
//     }
//     return null;
//   } catch (error) {
//     console.error("Error getting link from cache:", error);
//     return null;
//   }
// };

// // Utility function to update the JSON file with new link data
// const updateCache = async (link, data) => {
//   try {
//     // Assuming you are using localStorage for simplicity
//     const cachedData = localStorage.getItem("linkCache");
//     const newCache = {
//       ...(cachedData ? JSON.parse(cachedData) : {}),
//       [link]: data,
//     };
//     localStorage.setItem("linkCache", JSON.stringify(newCache));
//   } catch (error) {
//     console.error("Error updating cache:", error);
//   }
// };

import fs from "fs";

// Utility function to check if the link is present in the JSON file
const isLinkInCache = async (link) => {
  try {
    const cachedData = fs.readFileSync("linkCache.json", "utf-8");
    const parsedCache = JSON.parse(cachedData);
    return parsedCache.hasOwnProperty(link);
  } catch (error) {
    console.error("Error checking link in cache:", error);
    return false;
  }
};

// Utility function to get link data from the JSON file
const getLinkFromCache = async (link) => {
  try {
    const cachedData = fs.readFileSync("linkCache.json", "utf-8");
    const parsedCache = JSON.parse(cachedData);
    return parsedCache[link] || null;
  } catch (error) {
    console.error("Error getting link from cache:", error);
    return null;
  }
};

// Utility function to update the JSON file with new link data
const updateCache = async (link, data) => {
  try {
    const cachedData = fs.readFileSync("linkCache.json", "utf-8");
    const newCache = {
      ...(cachedData ? JSON.parse(cachedData) : {}),
      [link]: data,
    };
    fs.writeFileSync("linkCache.json", JSON.stringify(newCache), "utf-8");
  } catch (error) {
    console.error("Error updating cache:", error);
  }
};

export default LinkPreview;
