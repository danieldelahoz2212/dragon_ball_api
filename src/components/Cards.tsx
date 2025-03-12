import { Stack, Box, Typography } from "@mui/material";
import { IResponderGetCharacters } from "../types/type";

interface CardsProps {
  data: IResponderGetCharacters | null;
  handleOpen: (id: number) => void;
}

export const Cards: React.FC<CardsProps> = ({ data, handleOpen }) => {
  return (
    <Stack direction="row" justifyContent="center" gap={5} flexWrap={"wrap"}>
      {data?.items?.map((item) => (
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
      ))}
    </Stack>
  );
};