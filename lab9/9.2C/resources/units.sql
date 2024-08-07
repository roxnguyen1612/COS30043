-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: ictstu-db1.cc.swin.edu.au
-- Generation Time: May 09, 2024 at 01:05 PM
-- Server version: 5.5.68-MariaDB
-- PHP Version: 7.3.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `s103500095_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `units`
--

CREATE TABLE `units` (
  `id` int(11) NOT NULL,
  `code` varchar(30) NOT NULL,
  `desc` varchar(40) NOT NULL,
  `cp` float NOT NULL,
  `type` varchar(40) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `units`
--

INSERT INTO `units` (`id`, `code`, `desc`, `cp`, `type`) VALUES
(1, 'ICT10001', 'Problem Solving with ICT', 12.5, 'Core'),
(2, 'COS10005', 'Web Development', 12.5, 'Core'),
(3, 'INF10003', 'Introduction to Business Information Sys', 12.5, 'Core'),
(4, 'INF10002', 'Database Analysis and Design', 12.5, 'Core'),
(5, 'COS10009', 'Introduction to Programming', 12.5, 'Core'),
(6, 'INF30029', 'Information Technology Project Managemen', 12.5, 'Core'),
(7, 'ICT30005', 'Professional Issues in Information Techn', 12.5, 'Core'),
(8, 'ICT30001', 'Information Technology Project', 12.5, 'Core'),
(9, 'COS20001', 'User-Centred Design', 12.5, 'Software Development'),
(10, 'TNE10005', 'Network Administration', 12.5, 'Software Development'),
(11, 'COS20016', 'Operating System Configuration', 12.5, 'Software Development'),
(12, 'SWE20001', 'Development Project 1 - Tools and Practi', 12.5, 'Software Development'),
(13, 'COS20007', 'Object Oriented Programming', 12.5, 'Software Development'),
(14, 'COS30015', 'IT Security', 12.5, 'Software Development'),
(15, 'COS30043', 'Interface Design and Development', 12.5, 'Software Development'),
(16, 'COS30017', 'Software Development for Mobile Devices', 12.5, 'Core'),
(17, 'INF20012', 'Enterprise Systems', 12.5, 'Systems Analysis'),
(18, 'ACC10007', 'Financial Information for Decision Makin', 12.5, 'Systems Analysis'),
(19, 'INF20003', 'Requirements Analysis and Modelling', 12.5, 'Systems Analysis'),
(20, 'ACC20014', 'Management Decision Making', 12.5, 'Systems Analysis'),
(21, 'INF30005', 'Business Process Management', 12.5, 'Systems Analysis'),
(22, 'INF30003', 'Business Information Systems Analysis', 12.5, 'Systems Analysis'),
(23, 'INF30020', 'Information Systems Risk and Security', 12.5, 'Systems Analysis'),
(24, 'INF30001', 'Systems Acquisition & Implementation Man', 12.5, 'Systems Analysis');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `units`
--
ALTER TABLE `units`
  ADD PRIMARY KEY (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
