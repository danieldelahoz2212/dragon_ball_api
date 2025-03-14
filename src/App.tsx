import { useEffect, useState } from "react";
import { Container, Stack, Box, Typography, Modal, Skeleton } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./App.css";
import axiosInstance from "./api/dragon-ball";
import { Character, IResponderGetCharacters } from "./types/type";
import { Cards } from "./components/Cards";

function App() {
  const [data, setData] = useState<IResponderGetCharacters | null>(null);
  const [mainImage, setMainImage] = useState<string | null>(null);
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(
    null
  );
  const [open, setOpen] = useState(false);

  const fetchData = async () => {
    try {
      const res = await axiosInstance.get<IResponderGetCharacters>(
        "/characters"
      );
      setData(res.data);
      console.log("Respuesta:", res.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const fetchCharacter = async (id: number) => {
    try {
      const res = await axiosInstance.get<Character>(`/characters/${id}`);
      console.log("Character:", res.data);
      setSelectedCharacter(res.data);
      setMainImage(res.data.image);
      setOpen(true);
    } catch (error) {
      console.error("Error fetching character:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleOpen = (id: number) => {
    fetchCharacter(id);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedCharacter(null);
  };

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 5,
        minHeight: "100vh",
        width: "100%",
        overflowX: "hidden",
      }}
    >
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        gap={5}
        p={5}
        sx={{
          width: "100%",
          flexWrap: "wrap",
        }}
      >
        <Box
          component="img"
          src="https://png.pngtree.com/png-vector/20230303/ourmid/pngtree-dragon-ball-z-vector-super-illustration-png-image_6627050.png"
          alt="Dragon Ball Logo"
          sx={{
            width: "100px",
            height: "auto",
          }}
        />
        <Typography variant="h2" fontWeight={700} sx={{ color: "#edba02" }}>
          Dragon Ball
        </Typography>
      </Stack>
      <Cards data={data} handleOpen={handleOpen} />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "70%",
            maxHeight: "70vh",
            bgcolor: "#1e1e1e",
            color: "#fff",
            borderRadius: "20px",
            boxShadow: 24,
            p: 4,
            display: "flex",
            flexDirection: "column",
            gap: 3,
            overflow: "auto",
          }}
        >
          {!selectedCharacter ? (
            <Stack direction="row" spacing={3}>
              <Skeleton variant="rectangular" width={250} height={350} />
              <Stack spacing={2} flex={1}>
                <Skeleton variant="text" width="60%" height={40} />
                <Skeleton variant="text" width="90%" height={20} />
                <Skeleton variant="text" width="90%" height={20} />
                <Skeleton variant="text" width="50%" height={20} />
                <Skeleton variant="text" width="80%" height={20} />
                <Skeleton variant="text" width="70%" height={20} />
              </Stack>
            </Stack>
          ) : (
            <>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", md: "row" },
                  gap: 3,
                }}
              >
                <Box
                  component="img"
                  src={mainImage || selectedCharacter.image}
                  alt={selectedCharacter.name}
                  sx={{
                    width: { xs: "90%", md: "250px" },
                    height: { xs: "auto", md: "350px" },
                    objectFit: "contain",
                    borderRadius: "10px",
                    backgroundColor: "#2c2c2c",
                    p: 2,
                  }}
                />
                <Stack
                  justifyContent="center"
                  alignItems="flex-start"
                  spacing={2}
                  width="100%"
                >
                  <Typography
                    variant="h3"
                    fontWeight="bold"
                    sx={{
                      color: "#edba02",
                      width: "100%",
                      textAlign: "center",
                    }}
                  >
                    {selectedCharacter.name}
                  </Typography>
                  <Typography variant="subtitle2" sx={{ textAlign: "justify" }}>
                    {selectedCharacter.description ||
                      "No description available."}
                  </Typography>
                  <Typography variant="subtitle2" sx={{ textAlign: "justify" }}>
                    Raza: {selectedCharacter.race}
                  </Typography>
                  <Typography variant="subtitle2" sx={{ textAlign: "justify" }}>
                    Género: {selectedCharacter.gender}
                  </Typography>
                  <Typography variant="subtitle2" sx={{ textAlign: "justify" }}>
                    Ki: {selectedCharacter.ki}/{selectedCharacter.maxKi}
                  </Typography>
                  <Typography variant="subtitle2" sx={{ textAlign: "justify" }}>
                    Afiliación: {selectedCharacter.affiliation}
                  </Typography>
                  <Typography variant="subtitle2" sx={{ textAlign: "justify" }}>
                    Planeta de origen: {selectedCharacter.originPlanet.name}
                  </Typography>
                </Stack>
              </Box>
              <Typography
                variant="h6"
                fontWeight="bold"
                sx={{
                  color: "#edba02",
                  width: "100%",
                  textAlign: "center",
                  mt: 2,
                }}
              >
                Transformaciones
              </Typography>
              {selectedCharacter.transformations.length > 0 ? (
                <Box width="100%">
                  <Swiper
                    modules={[Navigation, Pagination]}
                    navigation
                    pagination={{ clickable: true }}
                    slidesPerView={3}
                    style={{ width: "100%", height: "300px" }}
                  >
                    {selectedCharacter.transformations.map((transformation) => (
                      <SwiperSlide key={transformation.id}>
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                          }}
                        >
                          <Box
                            component="img"
                            src={transformation.image}
                            alt={transformation.name}
                            sx={{
                              width: "100%",
                              height: "200px",
                              objectFit: "contain",
                              cursor: "pointer",
                              transition: "transform 0.2s",
                              "&:hover": {
                                transform: "scale(1.05)",
                              },
                            }}
                            onClick={() => setMainImage(transformation.image)}
                          />
                          <Typography
                            variant="subtitle2"
                            sx={{ color: "#fff", mt: 1 }}
                          >
                            {transformation.name}
                          </Typography>
                        </Box>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </Box>
              ) : (
                <Typography
                  variant="subtitle1"
                  sx={{
                    color: "#aaa",
                    width: "100%",
                    textAlign: "center",
                    mt: 2,
                  }}
                >
                  No hay transformaciones disponibles.
                </Typography>
              )}
            </>
          )}
        </Box>
      </Modal>
    </Container>
  );
}

export default App;
