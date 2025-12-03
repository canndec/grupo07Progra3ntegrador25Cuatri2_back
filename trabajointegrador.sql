-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 03-12-2025 a las 21:14:41
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `trabajointegrador`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `precio` decimal(15,2) NOT NULL,
  `imagen` text NOT NULL,
  `categoria` varchar(50) NOT NULL,
  `activo` tinyint(1) DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`id`, `nombre`, `precio`, `imagen`, `categoria`, `activo`) VALUES
(1, 'PlayStation 5 Pro CFI-7020 2TB Digital', 710000.00, 'https://gmedia.playstation.com/is/image/SIEPDC/ps5-pro-dualsense-image-block-01-en-18sep24?$1200px$', 'consola', 1),
(2, 'PlayStation 4 Slim CUH-20 1TB Standard', 420000.00, 'https://http2.mlstatic.com/D_Q_NP_798586-MLA40076060236_122019-R.webp', 'consola', 1),
(3, 'Nintendo Switch OLED 64GB Standard ', 400000.00, 'https://http2.mlstatic.com/D_Q_NP_723339-MLA95701762112_102025-R.webp', 'consola', 1),
(4, 'Sony Playstation 2 Slim 64gb', 150000.00, 'https://http2.mlstatic.com/D_Q_NP_805094-MLA91997584688_092025-R.webp', 'consola', 1),
(5, 'Microsoft Xbox Series S 1TB Standard', 380000.00, 'https://http2.mlstatic.com/D_Q_NP_978688-MLA93955987614_102025-R.webp', 'consola', 1),
(6, 'Consola Portátil Retroid Pocket Flip 2', 250000.00, 'https://http2.mlstatic.com/D_Q_NP_992139-MLA91374835293_082025-R.webp', 'consola', 1),
(7, 'Sony Playstation 3 Slim Pes ', 150000.00, 'https://http2.mlstatic.com/D_Q_NP_720444-MLA92278059630_092025-R.webp', 'consola', 1),
(10, 'The Last of Us 2', 30000.00, 'https://storelaplata.com.ar/img/Public/producto-61490614-0.jpg', 'juego', 1),
(11, 'Five Nights at Freddy\'s: Security Breach PS4', 180000.00, 'https://storelaplata.com.ar/img/Public/1098-producto-five-ps4-2910.jpg', 'juego', 1),
(12, 'Spiderman Miles Morales', 280000.00, 'https://storelaplata.com.ar/img/Public/producto-66540034-0.jpg', 'juego', 0),
(13, 'GTA V PS5', 250000.00, 'https://storelaplata.com.ar/img/Public/1098-producto-gta-v-para-tienda-4758.jpg', 'juego', 1),
(14, 'Until Dawn PS5', 220000.00, 'https://storelaplata.com.ar/img/Public/1098/47314-producto-1.jpg', 'juego', 1),
(15, 'STRAY PS5', 200000.00, 'https://storelaplata.com.ar/img/Public/1098/9693-producto-stray-ps5.jpg', 'juego', 1),
(57, 'Crash Twinsanity PS2', 40000.00, 'https://http2.mlstatic.com/D_NQ_NP_2X_717934-MLA77798281481_072024-F.webp', 'juego', 1),
(58, 'Sonic X Shadow Generations PS5', 46000.00, 'https://nextgames.com.ar/img/Public/1040/85833-producto-81ieu3zukcl-ac-sl1500.jpg', 'juego', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `email` varchar(150) DEFAULT NULL,
  `contrasenia` varchar(255) DEFAULT NULL,
  `es_admin` tinyint(1) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `nombre`, `email`, `contrasenia`, `es_admin`) VALUES
(8, 'test1', 'test@test1.com', '$2b$10$xaZZO8KeHHoj8Jt4ij1EWOoPopKUuwMtA6OgyIBZMl9ZwfTOS/B2C', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ventas`
--

CREATE TABLE `ventas` (
  `id` int(11) NOT NULL,
  `nombre_usuario` varchar(100) NOT NULL,
  `fecha` datetime DEFAULT current_timestamp(),
  `monto_total` decimal(10,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `ventas`
--


-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ventas_productos`
--

CREATE TABLE `ventas_productos` (
  `id_venta` int(11) NOT NULL,
  `id_producto` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `ventas_productos`
--

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `ventas`
--
ALTER TABLE `ventas`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=59;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de la tabla `ventas`
--
ALTER TABLE `ventas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
