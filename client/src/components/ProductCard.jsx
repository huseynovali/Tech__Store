import React from "react";

function ProductCard({ data }) {
  return (

      <div className="px-4">
        <div className="stock__checker p-2">
          {data.inStock ? (
            <svg
              width="59"
              height="12"
              viewBox="0 0 59 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.7361 3.63C17.5628 3.63 17.4161 3.57 17.2961 3.45C17.1761 3.33 17.1161 3.18333 17.1161 3.01C17.1161 2.83667 17.1761 2.69 17.2961 2.57C17.4161 2.45 17.5628 2.39 17.7361 2.39C17.9028 2.39 18.0428 2.45 18.1561 2.57C18.2761 2.69 18.3361 2.83667 18.3361 3.01C18.3361 3.18333 18.2761 3.33 18.1561 3.45C18.0428 3.57 17.9028 3.63 17.7361 3.63ZM18.1761 4.52V10H17.2661V4.52H18.1761ZM22.397 4.42C23.0637 4.42 23.6037 4.62333 24.017 5.03C24.4304 5.43 24.637 6.01 24.637 6.77V10H23.737V6.9C23.737 6.35333 23.6004 5.93667 23.327 5.65C23.0537 5.35667 22.6804 5.21 22.207 5.21C21.727 5.21 21.3437 5.36 21.057 5.66C20.777 5.96 20.637 6.39667 20.637 6.97V10H19.727V4.52H20.637V5.3C20.817 5.02 21.0604 4.80333 21.367 4.65C21.6804 4.49667 22.0237 4.42 22.397 4.42ZM30.7295 10.09C30.3095 10.09 29.9329 10.02 29.5995 9.88C29.2662 9.73333 29.0029 9.53333 28.8095 9.28C28.6162 9.02 28.5095 8.72333 28.4895 8.39H29.4295C29.4562 8.66333 29.5829 8.88667 29.8095 9.06C30.0429 9.23333 30.3462 9.32 30.7195 9.32C31.0662 9.32 31.3395 9.24333 31.5395 9.09C31.7395 8.93667 31.8395 8.74333 31.8395 8.51C31.8395 8.27 31.7329 8.09333 31.5195 7.98C31.3062 7.86 30.9762 7.74333 30.5295 7.63C30.1229 7.52333 29.7895 7.41667 29.5295 7.31C29.2762 7.19667 29.0562 7.03333 28.8695 6.82C28.6895 6.6 28.5995 6.31333 28.5995 5.96C28.5995 5.68 28.6829 5.42333 28.8495 5.19C29.0162 4.95667 29.2529 4.77333 29.5595 4.64C29.8662 4.5 30.2162 4.43 30.6095 4.43C31.2162 4.43 31.7062 4.58333 32.0795 4.89C32.4529 5.19667 32.6529 5.61667 32.6795 6.15H31.7695C31.7495 5.86333 31.6329 5.63333 31.4195 5.46C31.2129 5.28667 30.9329 5.2 30.5795 5.2C30.2529 5.2 29.9929 5.27 29.7995 5.41C29.6062 5.55 29.5095 5.73333 29.5095 5.96C29.5095 6.14 29.5662 6.29 29.6795 6.41C29.7995 6.52333 29.9462 6.61667 30.1195 6.69C30.2995 6.75667 30.5462 6.83333 30.8595 6.92C31.2529 7.02667 31.5729 7.13333 31.8195 7.24C32.0662 7.34 32.2762 7.49333 32.4495 7.7C32.6295 7.90667 32.7229 8.17667 32.7295 8.51C32.7295 8.81 32.6462 9.08 32.4795 9.32C32.3129 9.56 32.0762 9.75 31.7695 9.89C31.4695 10.0233 31.1229 10.09 30.7295 10.09ZM35.1241 5.27V8.5C35.1241 8.76667 35.1808 8.95667 35.2941 9.07C35.4075 9.17667 35.6041 9.23 35.8841 9.23H36.5541V10H35.7341C35.2275 10 34.8475 9.88333 34.5941 9.65C34.3408 9.41667 34.2141 9.03333 34.2141 8.5V5.27H33.5041V4.52H34.2141V3.14H35.1241V4.52H36.5541V5.27H35.1241ZM40.0467 10.09C39.5334 10.09 39.0667 9.97333 38.6467 9.74C38.2334 9.50667 37.9067 9.17667 37.6667 8.75C37.4334 8.31667 37.3167 7.81667 37.3167 7.25C37.3167 6.69 37.4367 6.19667 37.6767 5.77C37.9234 5.33667 38.2567 5.00667 38.6767 4.78C39.0967 4.54667 39.5667 4.43 40.0867 4.43C40.6067 4.43 41.0767 4.54667 41.4967 4.78C41.9167 5.00667 42.2467 5.33333 42.4867 5.76C42.7334 6.18667 42.8567 6.68333 42.8567 7.25C42.8567 7.81667 42.7301 8.31667 42.4767 8.75C42.2301 9.17667 41.8934 9.50667 41.4667 9.74C41.0401 9.97333 40.5667 10.09 40.0467 10.09ZM40.0467 9.29C40.3734 9.29 40.6801 9.21333 40.9667 9.06C41.2534 8.90667 41.4834 8.67667 41.6567 8.37C41.8367 8.06333 41.9267 7.69 41.9267 7.25C41.9267 6.81 41.8401 6.43667 41.6667 6.13C41.4934 5.82333 41.2667 5.59667 40.9867 5.45C40.7067 5.29667 40.4034 5.22 40.0767 5.22C39.7434 5.22 39.4367 5.29667 39.1567 5.45C38.8834 5.59667 38.6634 5.82333 38.4967 6.13C38.3301 6.43667 38.2467 6.81 38.2467 7.25C38.2467 7.69667 38.3267 8.07333 38.4867 8.38C38.6534 8.68667 38.8734 8.91667 39.1467 9.07C39.4201 9.21667 39.7201 9.29 40.0467 9.29ZM43.7132 7.25C43.7132 6.68333 43.8265 6.19 44.0532 5.77C44.2799 5.34333 44.5932 5.01333 44.9932 4.78C45.3999 4.54667 45.8632 4.43 46.3832 4.43C47.0565 4.43 47.6099 4.59333 48.0432 4.92C48.4832 5.24667 48.7732 5.7 48.9132 6.28H47.9332C47.8399 5.94667 47.6565 5.68333 47.3832 5.49C47.1165 5.29667 46.7832 5.2 46.3832 5.2C45.8632 5.2 45.4432 5.38 45.1232 5.74C44.8032 6.09333 44.6432 6.59667 44.6432 7.25C44.6432 7.91 44.8032 8.42 45.1232 8.78C45.4432 9.14 45.8632 9.32 46.3832 9.32C46.7832 9.32 47.1165 9.22667 47.3832 9.04C47.6499 8.85333 47.8332 8.58667 47.9332 8.24H48.9132C48.7665 8.8 48.4732 9.25 48.0332 9.59C47.5932 9.92333 47.0432 10.09 46.3832 10.09C45.8632 10.09 45.3999 9.97333 44.9932 9.74C44.5932 9.50667 44.2799 9.17667 44.0532 8.75C43.8265 8.32333 43.7132 7.82333 43.7132 7.25ZM53.1874 10L51.0374 7.58V10H50.1274V2.6H51.0374V6.95L53.1474 4.52H54.4174L51.8374 7.25L54.4274 10H53.1874Z"
                fill="#78A962"
              />
              <circle cx="5.5" cy="6" r="5" fill="#78A962" />
              <path
                d="M7.5 5L4.98404 8L3.5 6.27853"
                stroke="white"
                stroke-linecap="round"
              />
            </svg>
          ) : (
            <svg
              width="103"
              height="12"
              viewBox="0 0 103 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.43 6.25C16.43 5.68333 16.5433 5.19 16.77 4.77C16.9967 4.34333 17.31 4.01333 17.71 3.78C18.1167 3.54667 18.58 3.43 19.1 3.43C19.7733 3.43 20.3267 3.59333 20.76 3.92C21.2 4.24667 21.49 4.7 21.63 5.28H20.65C20.5567 4.94667 20.3733 4.68333 20.1 4.49C19.8333 4.29667 19.5 4.2 19.1 4.2C18.58 4.2 18.16 4.38 17.84 4.74C17.52 5.09333 17.36 5.59667 17.36 6.25C17.36 6.91 17.52 7.42 17.84 7.78C18.16 8.14 18.58 8.32 19.1 8.32C19.5 8.32 19.8333 8.22667 20.1 8.04C20.3667 7.85333 20.55 7.58667 20.65 7.24H21.63C21.4833 7.8 21.19 8.25 20.75 8.59C20.31 8.92333 19.76 9.09 19.1 9.09C18.58 9.09 18.1167 8.97333 17.71 8.74C17.31 8.50667 16.9967 8.17667 16.77 7.75C16.5433 7.32333 16.43 6.82333 16.43 6.25ZM25.5642 3.42C25.9776 3.42 26.3509 3.51 26.6842 3.69C27.0176 3.86333 27.2776 4.12667 27.4642 4.48C27.6576 4.83333 27.7542 5.26333 27.7542 5.77V9H26.8542V5.9C26.8542 5.35333 26.7176 4.93667 26.4442 4.65C26.1709 4.35667 25.7976 4.21 25.3242 4.21C24.8442 4.21 24.4609 4.36 24.1742 4.66C23.8942 4.96 23.7542 5.39667 23.7542 5.97V9H22.8442V1.6H23.7542V4.3C23.9342 4.02 24.1809 3.80333 24.4942 3.65C24.8142 3.49667 25.1709 3.42 25.5642 3.42ZM34.2407 6.05C34.2407 6.22333 34.2307 6.40667 34.2107 6.6H29.8307C29.864 7.14 30.0474 7.56333 30.3807 7.87C30.7207 8.17 31.1307 8.32 31.6107 8.32C32.004 8.32 32.3307 8.23 32.5907 8.05C32.8574 7.86333 33.044 7.61667 33.1507 7.31H34.1307C33.984 7.83667 33.6907 8.26667 33.2507 8.6C32.8107 8.92667 32.264 9.09 31.6107 9.09C31.0907 9.09 30.624 8.97333 30.2107 8.74C29.804 8.50667 29.484 8.17667 29.2507 7.75C29.0174 7.31667 28.9007 6.81667 28.9007 6.25C28.9007 5.68333 29.014 5.18667 29.2407 4.76C29.4674 4.33333 29.784 4.00667 30.1907 3.78C30.604 3.54667 31.0774 3.43 31.6107 3.43C32.1307 3.43 32.5907 3.54333 32.9907 3.77C33.3907 3.99667 33.6974 4.31 33.9107 4.71C34.1307 5.10333 34.2407 5.55 34.2407 6.05ZM33.3007 5.86C33.3007 5.51333 33.224 5.21667 33.0707 4.97C32.9174 4.71667 32.7074 4.52667 32.4407 4.4C32.1807 4.26667 31.8907 4.2 31.5707 4.2C31.1107 4.2 30.7174 4.34667 30.3907 4.64C30.0707 4.93333 29.8874 5.34 29.8407 5.86H33.3007ZM35.1019 6.25C35.1019 5.68333 35.2152 5.19 35.4419 4.77C35.6685 4.34333 35.9819 4.01333 36.3819 3.78C36.7885 3.54667 37.2519 3.43 37.7719 3.43C38.4452 3.43 38.9985 3.59333 39.4319 3.92C39.8719 4.24667 40.1619 4.7 40.3019 5.28H39.3219C39.2285 4.94667 39.0452 4.68333 38.7719 4.49C38.5052 4.29667 38.1719 4.2 37.7719 4.2C37.2519 4.2 36.8319 4.38 36.5119 4.74C36.1919 5.09333 36.0319 5.59667 36.0319 6.25C36.0319 6.91 36.1919 7.42 36.5119 7.78C36.8319 8.14 37.2519 8.32 37.7719 8.32C38.1719 8.32 38.5052 8.22667 38.7719 8.04C39.0385 7.85333 39.2219 7.58667 39.3219 7.24H40.3019C40.1552 7.8 39.8619 8.25 39.4219 8.59C38.9819 8.92333 38.4319 9.09 37.7719 9.09C37.2519 9.09 36.7885 8.97333 36.3819 8.74C35.9819 8.50667 35.6685 8.17667 35.4419 7.75C35.2152 7.32333 35.1019 6.82333 35.1019 6.25ZM44.5761 9L42.4261 6.58V9H41.5161V1.6H42.4261V5.95L44.5361 3.52H45.8061L43.2261 6.25L45.8161 9H44.5761ZM48.9886 6.24C48.9886 5.68 49.1019 5.19 49.3286 4.77C49.5553 4.34333 49.8653 4.01333 50.2586 3.78C50.6586 3.54667 51.1019 3.43 51.5886 3.43C52.0686 3.43 52.4853 3.53333 52.8386 3.74C53.1919 3.94667 53.4553 4.20667 53.6286 4.52V3.52H54.5486V9H53.6286V7.98C53.4486 8.3 53.1786 8.56667 52.8186 8.78C52.4653 8.98667 52.0519 9.09 51.5786 9.09C51.0919 9.09 50.6519 8.97 50.2586 8.73C49.8653 8.49 49.5553 8.15333 49.3286 7.72C49.1019 7.28667 48.9886 6.79333 48.9886 6.24ZM53.6286 6.25C53.6286 5.83667 53.5453 5.47667 53.3786 5.17C53.2119 4.86333 52.9853 4.63 52.6986 4.47C52.4186 4.30333 52.1086 4.22 51.7686 4.22C51.4286 4.22 51.1186 4.3 50.8386 4.46C50.5586 4.62 50.3353 4.85333 50.1686 5.16C50.0019 5.46667 49.9186 5.82667 49.9186 6.24C49.9186 6.66 50.0019 7.02667 50.1686 7.34C50.3353 7.64667 50.5586 7.88333 50.8386 8.05C51.1186 8.21 51.4286 8.29 51.7686 8.29C52.1086 8.29 52.4186 8.21 52.6986 8.05C52.9853 7.88333 53.2119 7.64667 53.3786 7.34C53.5453 7.02667 53.6286 6.66333 53.6286 6.25ZM58.1264 8.16L59.8264 3.52H60.7964L58.6464 9H57.5864L55.4364 3.52H56.4164L58.1264 8.16ZM61.3519 6.24C61.3519 5.68 61.4652 5.19 61.6919 4.77C61.9185 4.34333 62.2285 4.01333 62.6219 3.78C63.0219 3.54667 63.4652 3.43 63.9519 3.43C64.4319 3.43 64.8485 3.53333 65.2019 3.74C65.5552 3.94667 65.8185 4.20667 65.9919 4.52V3.52H66.9119V9H65.9919V7.98C65.8119 8.3 65.5419 8.56667 65.1819 8.78C64.8285 8.98667 64.4152 9.09 63.9419 9.09C63.4552 9.09 63.0152 8.97 62.6219 8.73C62.2285 8.49 61.9185 8.15333 61.6919 7.72C61.4652 7.28667 61.3519 6.79333 61.3519 6.24ZM65.9919 6.25C65.9919 5.83667 65.9085 5.47667 65.7419 5.17C65.5752 4.86333 65.3485 4.63 65.0619 4.47C64.7819 4.30333 64.4719 4.22 64.1319 4.22C63.7919 4.22 63.4819 4.3 63.2019 4.46C62.9219 4.62 62.6985 4.85333 62.5319 5.16C62.3652 5.46667 62.2819 5.82667 62.2819 6.24C62.2819 6.66 62.3652 7.02667 62.5319 7.34C62.6985 7.64667 62.9219 7.88333 63.2019 8.05C63.4819 8.21 63.7919 8.29 64.1319 8.29C64.4719 8.29 64.7819 8.21 65.0619 8.05C65.3485 7.88333 65.5752 7.64667 65.7419 7.34C65.9085 7.02667 65.9919 6.66333 65.9919 6.25ZM68.9197 2.63C68.7464 2.63 68.5997 2.57 68.4797 2.45C68.3597 2.33 68.2997 2.18333 68.2997 2.01C68.2997 1.83667 68.3597 1.69 68.4797 1.57C68.5997 1.45 68.7464 1.39 68.9197 1.39C69.0864 1.39 69.2264 1.45 69.3397 1.57C69.4597 1.69 69.5197 1.83667 69.5197 2.01C69.5197 2.18333 69.4597 2.33 69.3397 2.45C69.2264 2.57 69.0864 2.63 68.9197 2.63ZM69.3597 3.52V9H68.4497V3.52H69.3597ZM71.8206 1.6V9H70.9106V1.6H71.8206ZM73.0316 6.24C73.0316 5.68 73.1449 5.19 73.3716 4.77C73.5982 4.34333 73.9082 4.01333 74.3016 3.78C74.7016 3.54667 75.1449 3.43 75.6316 3.43C76.1116 3.43 76.5282 3.53333 76.8816 3.74C77.2349 3.94667 77.4982 4.20667 77.6716 4.52V3.52H78.5916V9H77.6716V7.98C77.4916 8.3 77.2216 8.56667 76.8616 8.78C76.5082 8.98667 76.0949 9.09 75.6216 9.09C75.1349 9.09 74.6949 8.97 74.3016 8.73C73.9082 8.49 73.5982 8.15333 73.3716 7.72C73.1449 7.28667 73.0316 6.79333 73.0316 6.24ZM77.6716 6.25C77.6716 5.83667 77.5882 5.47667 77.4216 5.17C77.2549 4.86333 77.0282 4.63 76.7416 4.47C76.4616 4.30333 76.1516 4.22 75.8116 4.22C75.4716 4.22 75.1616 4.3 74.8816 4.46C74.6016 4.62 74.3782 4.85333 74.2116 5.16C74.0449 5.46667 73.9616 5.82667 73.9616 6.24C73.9616 6.66 74.0449 7.02667 74.2116 7.34C74.3782 7.64667 74.6016 7.88333 74.8816 8.05C75.1616 8.21 75.4716 8.29 75.8116 8.29C76.1516 8.29 76.4616 8.21 76.7416 8.05C77.0282 7.88333 77.2549 7.64667 77.4216 7.34C77.5882 7.02667 77.6716 6.66333 77.6716 6.25ZM81.0394 4.54C81.226 4.21333 81.4994 3.94667 81.8594 3.74C82.2194 3.53333 82.6294 3.43 83.0894 3.43C83.5827 3.43 84.026 3.54667 84.4194 3.78C84.8127 4.01333 85.1227 4.34333 85.3494 4.77C85.576 5.19 85.6894 5.68 85.6894 6.24C85.6894 6.79333 85.576 7.28667 85.3494 7.72C85.1227 8.15333 84.8094 8.49 84.4094 8.73C84.016 8.97 83.576 9.09 83.0894 9.09C82.616 9.09 82.1994 8.98667 81.8394 8.78C81.486 8.57333 81.2194 8.31 81.0394 7.99V9H80.1294V1.6H81.0394V4.54ZM84.7594 6.24C84.7594 5.82667 84.676 5.46667 84.5094 5.16C84.3427 4.85333 84.116 4.62 83.8294 4.46C83.5494 4.3 83.2394 4.22 82.8994 4.22C82.566 4.22 82.256 4.30333 81.9694 4.47C81.6894 4.63 81.4627 4.86667 81.2894 5.18C81.1227 5.48667 81.0394 5.84333 81.0394 6.25C81.0394 6.66333 81.1227 7.02667 81.2894 7.34C81.4627 7.64667 81.6894 7.88333 81.9694 8.05C82.256 8.21 82.566 8.29 82.8994 8.29C83.2394 8.29 83.5494 8.21 83.8294 8.05C84.116 7.88333 84.3427 7.64667 84.5094 7.34C84.676 7.02667 84.7594 6.66 84.7594 6.24ZM87.3572 2.63C87.1839 2.63 87.0372 2.57 86.9172 2.45C86.7972 2.33 86.7372 2.18333 86.7372 2.01C86.7372 1.83667 86.7972 1.69 86.9172 1.57C87.0372 1.45 87.1839 1.39 87.3572 1.39C87.5239 1.39 87.6639 1.45 87.7772 1.57C87.8972 1.69 87.9572 1.83667 87.9572 2.01C87.9572 2.18333 87.8972 2.33 87.7772 2.45C87.6639 2.57 87.5239 2.63 87.3572 2.63ZM87.7972 3.52V9H86.8872V3.52H87.7972ZM90.2581 1.6V9H89.3481V1.6H90.2581ZM92.2791 2.63C92.1057 2.63 91.9591 2.57 91.8391 2.45C91.7191 2.33 91.6591 2.18333 91.6591 2.01C91.6591 1.83667 91.7191 1.69 91.8391 1.57C91.9591 1.45 92.1057 1.39 92.2791 1.39C92.4457 1.39 92.5857 1.45 92.6991 1.57C92.8191 1.69 92.8791 1.83667 92.8791 2.01C92.8791 2.18333 92.8191 2.33 92.6991 2.45C92.5857 2.57 92.4457 2.63 92.2791 2.63ZM92.7191 3.52V9H91.8091V3.52H92.7191ZM95.38 4.27V7.5C95.38 7.76667 95.4367 7.95667 95.55 8.07C95.6633 8.17667 95.86 8.23 96.14 8.23H96.81V9H95.99C95.4833 9 95.1033 8.88333 94.85 8.65C94.5967 8.41667 94.47 8.03333 94.47 7.5V4.27H93.76V3.52H94.47V2.14H95.38V3.52H96.81V4.27H95.38ZM102.633 3.52L99.3326 11.58H98.3926L99.4726 8.94L97.2626 3.52H98.2726L99.9926 7.96L101.693 3.52H102.633Z"
                fill="#C94D3F"
              />
              <circle cx="5" cy="5" r="5" fill="#C94D3F" />
              <path
                d="M5.67669 5.85626L6.02669 5.50626C6.07383 5.4597 6.13347 5.42783 6.19838 5.41452C6.26328 5.4012 6.33065 5.40702 6.39231 5.43126L6.81888 5.60157C6.88119 5.62686 6.93462 5.67004 6.97244 5.72565C7.01025 5.78126 7.03076 5.84682 7.03138 5.91407V6.69532C7.03101 6.74107 7.0214 6.78627 7.00311 6.8282C6.98481 6.87013 6.95823 6.90793 6.92494 6.93931C6.89166 6.9707 6.85237 6.99502 6.80944 7.01083C6.7665 7.02663 6.72082 7.03358 6.67513 7.03126C3.68607 6.84532 3.08294 4.31407 2.96888 3.34532C2.96358 3.29775 2.96842 3.24959 2.98307 3.20402C2.99772 3.15846 3.02186 3.11651 3.05389 3.08093C3.08592 3.04536 3.12511 3.01698 3.1689 2.99764C3.21269 2.97831 3.26007 2.96846 3.30794 2.96876H4.06263C4.12997 2.96896 4.19572 2.9893 4.25141 3.02717C4.3071 3.06504 4.35018 3.1187 4.37513 3.18126L4.54544 3.60782C4.57048 3.66924 4.57687 3.73667 4.56381 3.8017C4.55075 3.86672 4.51882 3.92646 4.472 3.97344L4.122 4.32344C4.122 4.32344 4.32356 5.68751 5.67669 5.85626Z"
                fill="white"
              />
            </svg>
          )}
        </div>
        {/* comp image */}
        <div className="comp__img h-[150px] w-[150px] m-auto">
          <img src={data.photo} alt="" className="w-full" />
        </div>
        {/* rating and reviews */}
        <div className="rating__reviews flex w-full justify-between datas-center pt-2">
          <div className="rating flex">
            <div className="start_y flex">
              {Array.from({ length: Math.floor(data.rating) }, (_, i) => (
                <svg
                  width="14"
                  height="13"
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.75474 0.173835C6.7919 0.10127 6.8956 0.10127 6.93276 0.173834L8.77297 3.76772C8.7875 3.79609 8.81467 3.81583 8.84614 3.82088L12.8328 4.46045C12.9133 4.47337 12.9453 4.572 12.8878 4.62976L10.0385 7.49048C10.016 7.51306 10.0056 7.54501 10.0105 7.57649L10.6342 11.5657C10.6468 11.6462 10.5629 11.7072 10.4902 11.6703L6.88897 9.84443C6.86055 9.83002 6.82695 9.83002 6.79853 9.84443L3.19733 11.6703C3.12462 11.7072 3.04072 11.6462 3.05331 11.5657L3.67698 7.57649C3.68191 7.54501 3.67153 7.51306 3.64904 7.49048L0.799704 4.62976C0.742173 4.572 0.77422 4.47337 0.854715 4.46045L4.84136 3.82088C4.87283 3.81583 4.9 3.79609 4.91453 3.76772L6.75474 0.173835Z"
                    fill="#E9A426"
                  />
                </svg>
              ))}
            </div>
            <div className="star_b flex">
              {Array.from({ length: 5 - Math.floor(data.rating) }, (_, i) => (
                <svg
                  width="14"
                  height="13"
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.75474 0.173835C6.7919 0.10127 6.8956 0.10127 6.93276 0.173834L8.77297 3.76772C8.7875 3.79609 8.81467 3.81583 8.84614 3.82088L12.8328 4.46045C12.9133 4.47337 12.9453 4.572 12.8878 4.62976L10.0385 7.49048C10.016 7.51306 10.0056 7.54501 10.0105 7.57649L10.6342 11.5657C10.6468 11.6462 10.5629 11.7072 10.4902 11.6703L6.88897 9.84443C6.86055 9.83002 6.82695 9.83002 6.79853 9.84443L3.19733 11.6703C3.12462 11.7072 3.04072 11.6462 3.05331 11.5657L3.67698 7.57649C3.68191 7.54501 3.67153 7.51306 3.64904 7.49048L0.799704 4.62976C0.742173 4.572 0.77422 4.47337 0.854715 4.46045L4.84136 3.82088C4.87283 3.81583 4.9 3.79609 4.91453 3.76772L6.75474 0.173835Z"
                    fill="#CACDD8"
                  />
                </svg>
              ))}
            </div>
          </div>
          <div className="reviews">
            <p className="text-[#A2A6B0] text-xs "> Reviews:({data.reviews})</p>
          </div>
        </div>
        <div className="comp__info py-2">
          <p className="text-xs">{data.text}</p>
        </div>
        <div className="price__info">
          <span className="line-through text-[#666666] font-semibold text-sm block">
            ${data.oldPrice}.00
          </span>
          <span className="line-through  font-semibold text-lg  block ">
            ${data.nowPrice}.00
          </span>
        </div>
      </div>
 
  );
}

export default ProductCard;
