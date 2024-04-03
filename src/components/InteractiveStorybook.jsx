import React, { useState } from "react";
import { Box, Button, Image } from "@chakra-ui/react";
import styles from "../styles/StoryBook.module.css";
export const InteractiveStorybook = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const stories = [
    {
      text: "Once Upon a Time...",
      image:
        "https://cdn.pixabay.com/photo/2016/03/08/20/03/flag-1244649_640.jpg",
    },
    {
      text: "In a faraway land...",
      image:
        "https://cdn.pixabay.com/photo/2014/08/15/11/29/beach-418742_640.jpg",
    },
    {
      text: "The adventure began...(to be continued...)",
      image:
        "https://cdn.pixabay.com/photo/2018/04/26/12/14/travel-3351825_640.jpg",
    },
  ];

  const handleNextPage = () => {
    setCurrentPage((prevPage) => (prevPage + 1) % stories.length);
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) =>
      prevPage === 0 ? stories.length - 1 : prevPage - 1
    );
  };

  return (
    <Box
      className={styles.storyContainer}
      display="flex"
      flexDirection="column"
    >
      <Box>
        <Image src={stories[currentPage].image} alt="Story" />
        <p>{stories[currentPage].text}</p>
      </Box>
      <Box>
        <Button onClick={handlePreviousPage} mr={2}>
          Previous
        </Button>
        <Button onClick={handleNextPage}>Next</Button>
      </Box>
    </Box>
  );
};
