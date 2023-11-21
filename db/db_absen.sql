-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Nov 21, 2023 at 08:32 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_absen`
--

-- --------------------------------------------------------

--
-- Table structure for table `absent`
--

CREATE TABLE `absent` (
  `id` int(11) NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `date` varchar(255) NOT NULL,
  `absent` varchar(40) NOT NULL,
  `userId` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `absent`
--

INSERT INTO `absent` (`id`, `uuid`, `date`, `absent`, `userId`, `createdAt`, `updatedAt`) VALUES
(1, 'ed508cd8-d5c3-46a2-9a83-91036cd4b139', '12/11/2023', '1', 1, '2023-11-14 03:52:31', '2023-11-14 03:52:31'),
(2, 'c8ba9fd3-376e-4305-b44f-8a3c23516f53', '12/11/2023', '1', 3, '2023-11-14 03:55:35', '2023-11-14 03:55:35'),
(3, 'a3ae3bec-ab9b-4c9b-b524-3ae1e7666217', '12/11/2023', 'Hadir', 1, '2023-11-21 03:32:35', '2023-11-21 03:32:35');

-- --------------------------------------------------------

--
-- Table structure for table `Sessions`
--

CREATE TABLE `Sessions` (
  `sid` varchar(36) NOT NULL,
  `expires` datetime DEFAULT NULL,
  `data` text DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `Sessions`
--

INSERT INTO `Sessions` (`sid`, `expires`, `data`, `createdAt`, `updatedAt`) VALUES
('FI82Utv2Qcx71g-7V1UTyNdzluwSm53j', '2023-11-22 07:09:27', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-11-21 07:08:23', '2023-11-21 07:09:27'),
('mQng128BNv6uvwN9FuVppbXtGgV4ol_j', '2023-11-22 03:32:38', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"},\"userId\":\"6fca6260-c10f-4737-b5c3-c4fc6f0766c4\"}', '2023-11-14 04:15:33', '2023-11-21 03:32:38');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `uuid`, `name`, `password`, `role`, `createdAt`, `updatedAt`) VALUES
(1, '6fca6260-c10f-4737-b5c3-c4fc6f0766c4', 'Raihan Nur', '$argon2id$v=19$m=65536,t=3,p=4$iw+6yWy809MTqoBPAvLzKg$6f59KVJ6LG8p0cj80sMOByOMQKlxcoDN5IYtG6xyTNE', 'admin', '2023-11-09 14:30:40', '2023-11-09 14:30:40'),
(3, '11c13c70-2c8c-4be6-9e37-b71788982156', 'Asep Karbu', '$argon2id$v=19$m=65536,t=3,p=4$m1w+jOx1KAT4VFy0YrNgng$cPYrFPL+/CBrdvUlDfXA+pRLqE9e9LiHYeN0y4c0DMw', 'user', '2023-11-10 05:33:21', '2023-11-10 05:33:21'),
(4, '6be35c27-3401-4b47-afc8-7387eee01508', 'Asep mancing', '$argon2id$v=19$m=65536,t=3,p=4$VvR2g19DQy1YYoA90x3a2Q$kQlQbMuxKX7E9VH5Vv9kBLxizzK4QSF9oeWUxQLn4xE', 'user', '2023-11-13 03:57:23', '2023-11-13 03:57:23');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `absent`
--
ALTER TABLE `absent`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`);

--
-- Indexes for table `Sessions`
--
ALTER TABLE `Sessions`
  ADD PRIMARY KEY (`sid`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `absent`
--
ALTER TABLE `absent`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `absent`
--
ALTER TABLE `absent`
  ADD CONSTRAINT `absent_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
