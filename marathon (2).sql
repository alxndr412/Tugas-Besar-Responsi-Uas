-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jan 09, 2026 at 07:38 PM
-- Server version: 8.0.30
-- PHP Version: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `marathon`
--

-- --------------------------------------------------------

--
-- Table structure for table `events`
--

CREATE TABLE `events` (
  `id` int NOT NULL,
  `title` varchar(100) COLLATE utf8mb4_general_ci NOT NULL,
  `distance` varchar(20) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `route_image` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `route_url` text COLLATE utf8mb4_general_ci,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `events`
--

INSERT INTO `events` (`id`, `title`, `distance`, `route_image`, `route_url`, `created_at`) VALUES
(1, 'Marathon', '42 KM', '/images/rute_marathon.png', 'https://onthegomap.com/?m=r&u=km&w%5B%5D=Routes+may+not+be+suitable+for+public+use.&c%5B%5D=Route+data+%C2%A92026+On+The+Go+Map%2C+OpenStreetMap+Contributors&d=42863&f=e7c889c779&n=1&dm=1&context=share&r2=jrgl1kiiYL4K5cA2_9Hq22a4I3q2DI3m3LW17u2HW2Dk2Fw5d1g19_2J_3RU5i3Nw1Bg9x1aB0Y61i30k51W30w54c31w102D2Z1OZ8Kh4Cl22d194A3A5e2HY17_3N_1FY3Lm19S9q3LY4Ny1Dw4b1c3La2D41q2LE3e2Di4X1y2Ho2JqAf2WD~2Y8v1iAZ2i2F_3Tw5b1i6j1Y9Z2_8b2i2Fk4Ro4VG3Y5Z1o1By1Fq5d1q4Rg4Vy2Jy1Dk19_1Dm2Ju8v1k9Z2u9d2c1Dc7r1Y7p1Y3R_1Bw25E5AHIZ14HEDE3WJZ2yCl2iAl2W3JW6n1y4X1kCx2m4Ro3VU5u29_3Ro2Dk2DmAh2Y2PY4RW4Z1u2Jg9t1k2Hy1FsH~3w7p1_5f1w4d1W7l1W6X1m8d1e39c9h285UX1A3cEf3YAh2i2D_8l1e19_3Psd1v8Y2Hk7p1w3Ts2Hq9X2wAh2aCf2_5d1s4b1u17q19m6l1W4Pw1Jg2ROJA5A0y16c10k6h1e4Ty7r1u4Tg6r1s6l11D5X2Sz2Iz30ZC7X3Bd4D2E1Et4Ih95v1Fb1Lt2f1~67j17975z1T795L3Z2Db2F0ZCW1d7C7234Z1i7ZEW2L2M10sA9Gh3y158Ic4Gs6Eg3P2vCi1h24~H0l5GB0f21JCf5q2~2W1zIY5hBW3nBu2J2P0Q0K1z1r3X1x2Rp33TLb73R1NH~401Ln59f35Z2b10c10Nx6Vn8t1jECJ77j1nB7x17r1v1pE~1vGD1fAX1~27J1fHf1tCRX23d7PR3D5l1Dt1Hb3f1J5n32r3Er1Gr1Ep1Gr1Ex3Y1~1GrAc3j1m15463A4CE2u1Iq1i1k3s1W4Oe1k1c2Mc1Ek18c12Q0O5y12k1X7W5j1Y1Z7w456Z2s1l2q19HAIn2m17UEk2k1g5g1u44KMw28a1Km24Ob3KV8t7c2p9u2l1EzFy4t2SX2KRAn7k2l4k1b2Mn4m1r1Gx2W1v7o2v4s1r7m3p1KHJv2x2LLx2t1b2RV7n25Z3Ej11d2BVFB~1f1bG5Z25p23Z4Hf2f1~2b1l3HVHNb2f2FHl1z19J9f1B~17X19l1X1X2Bb1Cn5Al36B7F5N3t20v31X24r16J6r10R2n22BGH470X367s17g2Da4R9z23LJr29TBt13X1LZ4d2i1l1QJCRAN8B2~2Kp1Cj2Gr1Cn3M~4QxRw4J0x19n19x7l1Z13Z3Nd1Rb1Tj1LX7Z2Fi42K4OIc1Ga1c1c2Y1k23K54P6Z66d8Y1H2z8Md9KZCMrIc1~5Ax3Cx36x58l38d38~9MD8~12W21c1~2CRSf2Ih1Mt1Eb1w1n4QZ2c4pA_4pCARg2z5458Jb51h22XE3R8j31fHAn1Cr1Ol1W1d4o252X58v1Dv15X481G3e13u15Y30Q8_2Ai52Q6Y32e26c3Eg48e32i1282k1086u10U6u38o3n1Ad3Ib2Av2Gb2Ch2Gv1Kh13Z1Bj1Jp2p1l1Nn2Z1L5~8b3t1Hj1FB1f2NX2LX19t5v1X5p1d1BX4d1h5t1j3Tx19R3b2Bl3HL1~2D~17h2Bl2Bn4RR3x2Hn2Dp5TN10E0Dx3Bz27d13n6Pd23z19l29VNf2z2BDD5T1~4Fp15V172145A181C1i25m27a33u2Bk37e37u21s1Da5Bu40w14w20UVe9Di4Du27W1R530h2Dl17947A3m1~31b30~21v20n23xDHvOLf119LAMP231c5mAi2e5a2g4062M7k12W1w1W4uAyKMm1Ei1Ag1e1y4g1u4Ko20k11C9a15Y15Y32W1Aq1Kg2g6_NOw2Qk3Gg20A3EZ1k1NJOKKIs3c3w6Y6e6s5m3Y3o4c4k1e1I4y1o1y8q7y1s1_1_1u1c2Qc1Om1g1s3Ke2Oy3Gs2q1a8Ay1g1W7Oy3Mk3Y1y56g128K_3IY35EC_1Sy4Ua64a30W1', '2026-01-06 18:55:30'),
(2, 'Half Marathon', '21 KM', '/images/rute_hm.png', 'https://onthegomap.com/?m=r&u=km&w%5B%5D=Routes+may+not+be+suitable+for+public+use.&c%5B%5D=Route+data+%C2%A92026+On+The+Go+Map%2C+OpenStreetMap+Contributors&d=21745&f=e7c889c779&n=1&dm=1&context=share&r2=jrgl1kiiYL4K5cA2_9Hq22a4I3q2DI3m3LW17u2HW2Dk2Fw5d1g19_2J_3RU5i3Nw1Bg9x1aB0Y61i30k51W30w54c31w102D2Z1OZ8Kh4Cl22d194A3A5e2HY17_3N_1FY3Lm19S9q3LY4Ny1Dw4b1c3Le2Fq2LE3_1BA1o1Bw2Ly2Ho2JqAf2WD~2Y8v1iAZ2i2F_3Tw5b1i6j1y5h1c3No2Ji6n1i2Fk4Ro4VG3Y5Z1o1By1Fq5d1q4Rg4Vy2Jy1Dk19_1Dm2Ju8v1k9Z2u9d2c1Dc7r1Y7p1Y3R_1Bw25E5AHIZ14HEDE3WJZ2yCl2iAl2W3JW6n1y4X1kCx2e2Dd2E1d43R7PTX2Jn39X1Nr1Lt1Ff21f14j16d18x6At22T2r37TBPh1Z2LZ19P5DPh2VX43HLn85VBb2Bd217DX3Bv1Nr3J~2Nd4054z1Ih32V5~1PZ3Jr27FX1TD9FH9F5LBn2Dr1Jn1j2Y1X1Gb1It5e2v3o1r4_1Z5a2X6a2pGa6~Bw4B4C3r1l3t1z3Jl1p1n3Ln137X3r6r1h3Nb1v1X2DLHf1f1h3t3~93N4D9Tj1r3FRHNN1~1GH2BB013Bd1~6Lr3X1h6~1ZAb28h8Gd38h6k17p15272JAK98161FZ33T5RTb2DX1b2j5Rb2P~1Fp18d401015L7J7Fz1c2j9u2t1If12x17l2FfBn1Z4Ht4SX6g1r4S0E1w27M76t25v87fBDbCDl15~28Z1702Tg2~2s7z1W5j1q3Ds17U3a22y12Y14e15OPs19i11c14W24a26e40G4w10m1p3c4Z12b4Ax12tEc1d16n24zBUX54p36~2Cv4Ar28H0h16N0N2Z36r38J0K0h1W9Fq21EJw2Vo49m23o13IPi77u13c17a35m1Bm39Y3Fc51W11UPo64k2P6~1IB4b3K~61X7b1~2Bx7PR1Z11j39p59x67j11~47j23j13t11r310506h1g8n1W8Po3f1w6Ry49i1B_13KNq2h1k37Ih1g25GZ1c2Tg2Jk2p1q6X11g1s3Ke2Oy3Gs2q1a8Ay1g1W7Oy3Mk3Y1y58o1K_3IY35EC_14MN0Sq4W1s60i1', '2026-01-06 19:01:37'),
(3, '10 Kilometer', '10 KM ', '/images/rute_10km.png', 'https://onthegomap.com/?m=r&u=km&w%5B%5D=Routes+may+not+be+suitable+for+public+use.&c%5B%5D=Route+data+%C2%A92026+On+The+Go+Map%2C+OpenStreetMap+Contributors&d=10445&f=e7c889c779&n=1&dm=1&context=share&r2=jrgl1kiiYL4K5cA2_9Hq22a4I3q2DI3m3LW17u2HW2Dk2Fw5d1g19_2J_3RU5i3Nw1Bg9x1aB0Y61i30k51W30w54c31w102D2Z1OZ8Kh4Cl22d194A3A5e2HY17_3N_1FY3Lm19S9q3LY4Ny1Dw4b1c3Lu1BG37n30t11J1T5p3Bt4LXC1R1d13~15z15~23d17t21V7b27b49X21Vd13d13N3f13t3LR9b3X1d29~AZ1j5F30NJTTv1j2LTr4b6x3b51B2CZBI9g39u1Ts8R070v41j31l13h10f91t13d4B~13n4Bp4DR1S2g2Z9Ij2Qn3s1h7Gl2c1b7e1Z64JZ2Bn5VX4LhIj4H3I4o1~7i1f890D0Z21Z21F1j55V3X45N1O25g23i19g23W11E9a3Bo23Kh1sCP1Q2Y7Es5Cc14Ry49i1B_13KNq2h1k37Ih1g25GZ1c2Tg2Jk2h1s57UX11g1s3Ke2Oy3Gs2q1a8Ay1g1W7Oy3Mk3Y1y58o1K_3IY35EC_14MN0Sq4W1s62q206', '2026-01-06 19:02:45'),
(4, '5 Kilometer', '5 KM', '/images/rute_5km.png', 'https://onthegomap.com/?m=r&u=km&w%5B%5D=Routes+may+not+be+suitable+for+public+use.&c%5B%5D=Route+data+%C2%A92026+On+The+Go+Map%2C+OpenStreetMap+Contributors&d=5066&f=e7c889c779&n=1&dm=1&e&context=share&r2=jrgl1kiiYL4K5cA2_9Hq22a4I3q2DI3m3LW17u2HW2Dk2Fw5d1g19_2J_3RU5i3Nw1Bg9x1aB0Y61i30k51W30w54c31w102D2Z1OZ8Kh4Cl2092Tf4W1N2Z22p35x51lE5ZD3J3311107Ad53PN5f11B1H8I75l39x19n25BNp39d1Dl1F5r1Hb2FxBb2d4P2NGX42HAx24TbAIv58~1230N2z241324Y1y58o1K_3IY35EC_14MN0Sq4W1s62c2', '2026-01-06 19:03:27');

-- --------------------------------------------------------

--
-- Table structure for table `info`
--

CREATE TABLE `info` (
  `id` int NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `content` text COLLATE utf8mb4_general_ci
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `registrations`
--

CREATE TABLE `registrations` (
  `id` int NOT NULL,
  `user_id` int NOT NULL,
  `event_id` int NOT NULL,
  `full_name` varchar(100) COLLATE utf8mb4_general_ci NOT NULL,
  `email` varchar(100) COLLATE utf8mb4_general_ci NOT NULL,
  `phone` varchar(20) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `category` varchar(50) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `status` enum('pending','approved','rejected') COLLATE utf8mb4_general_ci DEFAULT 'pending',
  `registration_date` timestamp NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `registrations`
--

INSERT INTO `registrations` (`id`, `user_id`, `event_id`, `full_name`, `email`, `phone`, `category`, `status`, `registration_date`) VALUES
(34, 1, 1, 'Alexander Dimas', 'alexaanderd@gmail.com', '088806832277', 'Marathon (42K)', 'pending', '2026-01-08 02:15:44'),
(35, 7, 1, 'evan', 'evan@gmail.com', '088806832277', 'Marathon (42K)', 'approved', '2026-01-08 02:20:55'),
(36, 7, 1, 'dim', 'espeelsayk@gmail.com', '0987653433', '5 KM', 'pending', '2026-01-08 02:40:49');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int NOT NULL,
  `name` varchar(100) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `username` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `role` enum('admin','user') COLLATE utf8mb4_general_ci NOT NULL DEFAULT 'user'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `username`, `password`, `role`) VALUES
(1, 'Alexander Dimas', 'Dimas', '$2b$10$s18JeDfumxL4PZcAE1gMHu6KlDwYogZ1EJYdDUq9JgLbJvzszg33e', 'user'),
(3, 'Administrator', 'admin', '$2a$10$758esAi54oqBnVV2rNwDIuoqkyffb03LbVWkvJnXBCw7BSkvJn4bW', 'admin'),
(4, 'vincentius', 'vincentius', '$2a$10$7y1QPUT7DMrd3oc2SqnSWOQVzOjeIGJljcdi.kdrrXQkkfgsjwsem', 'user'),
(5, 'ilham', 'ilham', '$2a$10$WJH6jdM1jQwmZotoRxDGYOeAjUB33g4igjWnVZbhHQijjB/kGHN4S', 'user'),
(7, 'evan', 'evan', '$2a$10$CnA.5SjVIfTAOcUA66AcDuAuA1vouqJU4s2NUwinmdQc60m70.Hfa', 'user');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `events`
--
ALTER TABLE `events`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `info`
--
ALTER TABLE `info`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `registrations`
--
ALTER TABLE `registrations`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `event_id` (`event_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `events`
--
ALTER TABLE `events`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `info`
--
ALTER TABLE `info`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `registrations`
--
ALTER TABLE `registrations`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `registrations`
--
ALTER TABLE `registrations`
  ADD CONSTRAINT `fk_reg_event` FOREIGN KEY (`event_id`) REFERENCES `events` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `fk_reg_user` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `registrations_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `registrations_ibfk_2` FOREIGN KEY (`event_id`) REFERENCES `events` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
