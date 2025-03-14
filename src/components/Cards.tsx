import { Stack, Box, Typography, Skeleton } from "@mui/material";
import { IResponderGetCharacters } from "../types/type";

interface CardsProps {
  data: IResponderGetCharacters | null;
  handleOpen: (id: number) => void;
}

export const Cards: React.FC<CardsProps> = ({ data, handleOpen }) => {
  const skeletons = Array.from({ length: 10 });

  return (
    <Stack direction="row" justifyContent="center" gap={5} flexWrap={"wrap"}>
      {data?.items && data.items.length > 0 ? (
        data.items.map((item) => (
          <Stack
            direction={"column"}
            key={item.id}
            border="solid 0.5px"
            borderColor="#fff"
            borderRadius="15px"
            p={2}
            width="220px"
          >
            <Typography
              variant="h4"
              fontWeight={700}
              component="p"
              align="center"
              sx={{
                color: "#fff",
                mt: 2,
              }}
            >
              {item.name}
            </Typography>
            <Stack width="100%" height="300px" position="relative">
              <Box
                component="img"
                src={item.image}
                alt={item.name}
                position="absolute"
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
              />
            </Stack>
            <Box
              onClick={() => handleOpen(item.id)}
              component="button"
              sx={{
                backgroundColor: "#edba02",
                ":hover": {
                  backgroundColor: "#d16900",
                },
                color: "#000",
                borderRadius: "10px",
                padding: "10px",
                mt: 2,
                width: "100%",
              }}
            >
              Ver Detalles
            </Box>
          </Stack>
        ))
      ) : (
        skeletons.map((_, index) => (
          <Stack
            direction={"column"}
            key={index}
            border="solid 0.5px"
            borderColor="#fff"
            borderRadius="15px"
            p={2}
            width="220px"
            sx={{ bgcolor: "#2c2c2c" }}
          >
            <Skeleton
              variant="text"
              width="80%"
              height={40}
              sx={{ margin: "0 auto", bgcolor: "#555" }}
            />
            <Skeleton
              variant="rectangular"
              width="100%"
              height={300}
              sx={{ mt: 2, bgcolor: "#555" }}
            />
            <Skeleton
              variant="rectangular"
              width="100%"
              height={40}
              sx={{ mt: 2, borderRadius: "10px", bgcolor: "#555" }}
            />
          </Stack>
        ))
      )}
    </Stack>
  );
};
