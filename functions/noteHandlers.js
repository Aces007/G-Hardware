export const notes = ["A", "B", "C", "D", "E", "F", "G"];

export const handlePrev = (currentIndex, setIndex) => {
  setIndex((prevIndex) => (prevIndex === 0 ? notes.length - 1 : prevIndex - 1));
};

export const handleNext = (currentIndex, setIndex) => {
  setIndex((prevIndex) => (prevIndex === notes.length - 1 ? 0 : prevIndex + 1));
};

export const handleNoteClick = (currentIndex, navigation) => {
  const currentNote = notes[currentIndex];
  if (currentNote === "A") {
    navigation.navigate("A Major");
  }
};
