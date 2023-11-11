import React from "react";
import {Link} from "@mui/material";
import { styled, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import IconButton from "@mui/material/IconButton";

import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import MusicNoteIcon from "@mui/icons-material/MusicNote";

const Footer = () => {
  const CustomContainer = styled(Container)(({ theme }) => ({
    diplay: "flex",
    justifyContent: "space-around",
    gap: theme.spacing(5),
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      textAlign: "center",
    },
  }));
  const iconBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: "1rem",
    direction: "row",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
    },
  }));
  const FooterLink = styled("span")(({ theme }) => ({
    fontSize: "16px",
    fontFamily:"roboto",
    color: "#7A7AE",
    fontWeight: "300",
    cursor: "pointer",
    "&hover": {
      color: "#000",
    },
  }));

  return (
    <Box sx={{ py: 10, backgroundColor: "#7472cc", color: "white", mt: "5vh" }}>
      <CustomContainer>
        <CustomContainer>
          <Box
            sx={{
              mb: 2,
            }}
          >
            <Typography
              sx={{
                fontSize: "20px",
                fontWeight: "700",
              }}
            >
              Products
            </Typography>
            <FooterLink>
              <Link href="#terdekat" sx={{color:"white", textDecoration:"none"}}>Restoran Terdekat</Link>
            </FooterLink>
            <br />
            <FooterLink>
              <Link href="#sponsor" sx={{color:"white", textDecoration:"none"}}>Restoran Rekomendasi</Link>
            </FooterLink>
            <br />
            <FooterLink>
              <Link href="#populer" sx={{color:"white", textDecoration:"none"}}>Restoran Terpopuler</Link>
            </FooterLink>
          </Box>
          <Box sx={{
                    mb:2}}>
            <Typography
              sx={{
                fontSize: "20px",
                fontWeight: "700",
              }}
            >
              Resources
            </Typography>
            <FooterLink><Link href="#" sx={{color:"white", textDecoration:"none"}}>Beranda</Link></FooterLink>
            <br />
            <FooterLink>Tentang Kami</FooterLink>
            <br />
            <FooterLink>Faq</FooterLink>
          </Box>
          <Box>
            <Typography
              sx={{
                fontSize: "20px",
                fontWeight: "700",
                mb: 2,
              }}
            >
              Get To Know Us
            </Typography>
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: "500",
                mb: 2,
              }}
            >
              Anti Ribet, Anti Repot, Ya Antre Solusinya!
            </Typography>
            <iconBox>
              <IconButton
                sx={{color:"white"}}
                aria-label="Youtube"
                href="https://www.youtube.com/@Antrean_id"
              >
                <YouTubeIcon />
              </IconButton>
              <IconButton
                sx={{color:"white"}}
                aria-label="Instagram"
                href="https://www.instagram.com/antre__id/"
              >
                <InstagramIcon />
              </IconButton>
              <IconButton
                sx={{color:"white"}}
                aria-label="Tiktok"
                href="https://www.tiktok.com/@antre_zawa"
              >
                <MusicNoteIcon />
              </IconButton>
              <IconButton
                sx={{color:"white"}}
                aria-label="Twitter"
                href="https://twitter.com/AntreanZAWA"
              >
                <TwitterIcon />
              </IconButton>
            </iconBox>
          </Box>
        </CustomContainer>
      </CustomContainer>
    </Box>
  );
};
export default Footer;
