import React from "react";
import {useHistory} from "react-router-dom";

const Footer = () => {
    let history = useHistory();
    const onRedirect = () => {
        history.push(`/about`)
    }
    return (
        <div className='footer_contain'>
            <div className='copy_right cursor-pointer' onClick={onRedirect}>About</div>
        <ul className='social_footer_nav'>
            <li><a href="https://instagram.com/moonlight_pictures__?utm_medium=copy_link" target="_blank">
                <svg viewBox="0 0 600 600">
                    <g transform="matrix(1.01619,0,0,1.01619,44,43.8384)">
                        <path d="M251.921,0.159C183.503,0.159 174.924,0.449 148.054,1.675C121.24,2.899 102.927,7.157 86.902,13.385C70.336,19.823 56.287,28.437 42.282,42.442C28.277,56.447 19.663,70.496 13.225,87.062C6.997,103.086 2.739,121.399 1.515,148.213C0.289,175.083 0,183.662 0,252.08C0,320.497 0.289,329.076 1.515,355.946C2.739,382.76 6.997,401.073 13.225,417.097C19.663,433.663 28.277,447.712 42.282,461.718C56.287,475.723 70.336,484.337 86.902,490.775C102.927,497.002 121.24,501.261 148.054,502.484C174.924,503.71 183.503,504 251.921,504C320.338,504 328.917,503.71 355.787,502.484C382.601,501.261 400.914,497.002 416.938,490.775C433.504,484.337 447.553,475.723 461.559,461.718C475.564,447.712 484.178,433.663 490.616,417.097C496.843,401.073 501.102,382.76 502.325,355.946C503.551,329.076 503.841,320.497 503.841,252.08C503.841,183.662 503.551,175.083 502.325,148.213C501.102,121.399 496.843,103.086 490.616,87.062C484.178,70.496 475.564,56.447 461.559,42.442C447.553,28.437 433.504,19.823 416.938,13.385C400.914,7.157 382.601,2.899 355.787,1.675C328.917,0.449 320.338,0.159 251.921,0.159ZM251.921,45.551C319.186,45.551 327.154,45.807 353.718,47.019C378.28,48.14 391.619,52.244 400.496,55.693C412.255,60.263 420.647,65.723 429.462,74.538C438.278,83.353 443.737,91.746 448.307,103.504C451.757,112.381 455.861,125.72 456.981,150.282C458.193,176.846 458.45,184.814 458.45,252.08C458.45,319.345 458.193,327.313 456.981,353.877C455.861,378.439 451.757,391.778 448.307,400.655C443.737,412.414 438.278,420.806 429.462,429.621C420.647,438.437 412.255,443.896 400.496,448.466C391.619,451.916 378.28,456.02 353.718,457.14C327.158,458.352 319.191,458.609 251.921,458.609C184.65,458.609 176.684,458.352 150.123,457.14C125.561,456.02 112.222,451.916 103.345,448.466C91.586,443.896 83.194,438.437 74.378,429.621C65.563,420.806 60.103,412.414 55.534,400.655C52.084,391.778 47.98,378.439 46.859,353.877C45.647,327.313 45.391,319.345 45.391,252.08C45.391,184.814 45.647,176.846 46.859,150.282C47.98,125.72 52.084,112.381 55.534,103.504C60.103,91.746 65.563,83.353 74.378,74.538C83.194,65.723 91.586,60.263 103.345,55.693C112.222,52.244 125.561,48.14 150.123,47.019C176.687,45.807 184.655,45.551 251.921,45.551Z"/>
                        <path d="M251.921,336.053C205.543,336.053 167.947,298.457 167.947,252.08C167.947,205.702 205.543,168.106 251.921,168.106C298.298,168.106 335.894,205.702 335.894,252.08C335.894,298.457 298.298,336.053 251.921,336.053ZM251.921,122.715C180.474,122.715 122.556,180.633 122.556,252.08C122.556,323.526 180.474,381.444 251.921,381.444C323.367,381.444 381.285,323.526 381.285,252.08C381.285,180.633 323.367,122.715 251.921,122.715Z"/>
                        <path d="M416.627,117.604C416.627,134.3 403.092,147.834 386.396,147.834C369.701,147.834 356.166,134.3 356.166,117.604C356.166,100.908 369.701,87.374 386.396,87.374C403.092,87.374 416.627,100.908 416.627,117.604Z"/>
                    </g>
                </svg>
            </a></li>
            <li><a href="https://youtube.com/channel/UCeLxqi-V3PbBaRKUJYmseRA" target="_blank">
                <svg  viewBox="0 0 512 512"><g><g><path d="M265,96c65.3,0,118.7,1.1,168.1,3.3l0.7,0h0.7c23.1,0,42,22,42,49.1v1.1l0.1,1.1c2.3,34,3.4,69.3,3.4,104.9v0v0    c0.1,35.6-1.1,70.9-3.4,104.9l-0.1,1.1v1.1c0,13.8-4.7,26.6-13.4,36.1c-7.8,8.6-18,13.4-28.6,13.4h-0.8l-0.8,0    c-52.9,2.5-108.8,3.8-166.4,3.8c-3.5,0-7.1,0-10.6,0H256h-0.1c-3.6,0-7.2,0-10.8,0c-57.8,0-113.7-1.3-166.2-3.7l-0.8,0h-0.8    c-10.6,0-20.7-4.8-28.5-13.4c-8.6-9.5-13.4-22.3-13.4-36.1v-1.1l-0.1-1.1c-2.4-34.1-3.5-69.4-3.3-104.7v-0.1v-0.1    c-0.1-35.3,1-70.5,3.3-104.6l0.1-1.1v-1.1c0-27.2,18.8-49.3,41.9-49.3H78l0.7,0c49.5-2.3,102.9-3.3,168.2-3.3h9H265 M265,64    c-3,0-6,0-9,0s-6,0-9,0c-57.6,0-114.2,0.8-169.6,3.3c-40.8,0-73.9,36.3-73.9,81.3C1,184.4-0.1,220,0,255.7    c-0.1,35.7,0.9,71.3,3.4,107c0,45,33.1,81.6,73.9,81.6c54.8,2.6,110.7,3.8,167.8,3.8c3.6,0,7.3,0,10.9,0c3.6,0,7.2,0,10.7,0    c57.1,0,113-1.2,167.9-3.8c40.9,0,74-36.6,74-81.6c2.4-35.7,3.5-71.4,3.4-107.1c0.1-35.7-1-71.3-3.4-107.1c0-45-33.1-81.1-74-81.1    C379.2,64.8,322.7,64,265,64L265,64z"/></g><g><path d="M207,353.8V157.4l145,98.2L207,353.8z"/></g></g></svg>
            </a></li>
            <li><a href="mailto:moonlightpicture07@gmail.com">
                <svg id="mail" version="1.1" viewBox="0 0 96 96">
                    <path d="M80,12H16C9.373,12,4,17.373,4,24v48c0,6.627,5.373,12,12,12h64c6.627,0,12-5.373,12-12V24C92,17.373,86.627,12,80,12z   M80,20c0.459,0,0.893,0.093,1.303,0.235L48,46.877L14.697,20.235C15.108,20.093,15.541,20,16,20H80z M80,76H16c-2.21,0-4-1.79-4-4  V28.323l33.501,26.8C46.231,55.708,47.116,56,48,56s1.769-0.292,2.499-0.877L84,28.323V72C84,74.21,82.21,76,80,76z"/>
                </svg>
            </a></li>
            {/*<li>
                <svg viewBox="0 0 3000.000000 1930.000000" >

                    <g transform="translate(0.000000,1930.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
                        <path d="M14745 19259 c-798 -19 -1670 -194 -2440 -489 -845 -324 -1635 -806 -2305 -1406 -158 -142 -549 -537 -666 -673 -255 -297 -476 -596 -696 -941 -372 -583 -698 -1331 -889 -2035 -54 -200 -128 -533 -145 -650 -3 -22 -7 -47 -9 -55 -14 -52 -61 -412 -75 -570 -5 -63 -14 -164 -20 -225 -16 -176 -13 -871 4 -1075 52 -592 134 -1040 281 -1545 237 -809 618 -1573 1124 -2253 237 -318 548 -668 804 -904 l97 -90 98 40 c53 22 121 47 150 57 38 12 52 22 52 35 0 10 -44 67 -98 127 -919 1017 -1561 2272 -1817 3550 -37 182 -90 527 -100 643 -3 36 -10 117 -16 180 -15 147 -15 872 -1 1005 7 55 14 129 17 165 14 165 66 486 116 720 145 677 446 1457 811 2100 36 63 74 131 85 150 51 90 184 296 302 466 78 114 304 403 401 514 45 52 108 124 139 160 64 74 357 369 446 450 33 30 105 92 160 139 55 46 105 89 110 95 9 10 84 72 155 127 14 10 50 39 80 62 85 67 444 317 454 317 2 0 43 26 92 58 309 202 813 473 1144 615 605 259 1179 421 1810 511 187 27 357 41 678 57 434 21 1077 -31 1492 -121 698 -150 1191 -320 1773 -612 481 -240 846 -476 1392 -898 44 -34 103 -79 130 -100 284 -216 650 -580 901 -895 46 -58 109 -140 127 -165 10 -14 29 -41 42 -60 14 -19 32 -44 40 -55 60 -80 204 -289 327 -478 475 -722 837 -1582 1013 -2402 20 -93 52 -233 70 -310 56 -231 75 -375 75 -555 0 -123 1 -129 22 -136 42 -13 48 14 48 220 0 265 -34 560 -120 1046 -14 80 -90 410 -111 483 -11 40 -29 105 -40 146 -43 159 -150 478 -226 670 -393 1001 -961 1863 -1724 2617 -292 288 -444 420 -764 662 -377 285 -708 491 -1146 712 -795 401 -1613 646 -2519 754 -358 43 -688 56 -1135 45z"/>
                        <path d="M18840 16573 c-16 -27 -40 -63 -54 -82 -14 -19 -26 -44 -26 -57 0 -12 -18 -46 -40 -75 -22 -30 -40 -63 -40 -74 0 -26 -18 -53 -95 -140 -60 -68 -122 -176 -160 -280 -37 -98 -105 -169 -220 -227 -118 -60 -289 -227 -317 -310 -6 -18 -29 -58 -50 -89 -26 -38 -46 -82 -58 -132 -11 -42 -29 -95 -41 -119 -15 -30 -24 -74 -32 -154 l-10 -113 -54 -53 c-146 -142 -276 -295 -336 -396 l-19 -32 39 -39 c23 -23 55 -44 80 -50 55 -15 73 -34 73 -80 0 -28 -10 -51 -39 -90 -22 -29 -43 -67 -47 -85 -8 -39 -101 -180 -156 -237 -24 -24 -74 -70 -113 -103 -128 -107 -447 -416 -510 -494 -127 -156 -223 -232 -292 -232 -8 0 -47 -16 -86 -35 -39 -19 -78 -35 -88 -35 -26 0 -205 -88 -257 -127 -26 -19 -103 -90 -172 -157 -69 -67 -147 -140 -175 -161 -27 -21 -66 -53 -85 -71 -48 -44 -167 -124 -184 -124 -8 0 -27 -11 -43 -24 -40 -33 -88 -56 -117 -56 -14 0 -60 -11 -103 -24 -131 -41 -202 -56 -261 -56 -62 0 -146 -16 -289 -55 -79 -21 -123 -25 -300 -31 l-208 -6 -76 -34 c-42 -19 -79 -34 -82 -34 -4 0 -48 -28 -98 -62 -51 -35 -107 -72 -124 -83 -18 -11 -86 -64 -151 -118 -65 -53 -139 -107 -164 -119 -25 -12 -67 -39 -93 -60 -35 -27 -58 -38 -83 -38 -23 0 -37 -6 -41 -16 -7 -19 -98 -64 -128 -64 -25 0 -125 -74 -156 -115 -12 -16 -39 -48 -59 -70 -21 -22 -61 -75 -90 -117 -28 -43 -65 -86 -82 -95 -30 -18 -427 -537 -467 -610 -32 -62 -514 -597 -579 -644 -103 -75 -158 -109 -174 -109 -9 0 -50 -17 -90 -38 -40 -22 -91 -45 -113 -52 -22 -7 -61 -23 -87 -36 -26 -13 -59 -24 -72 -24 -14 0 -56 -12 -93 -26 -132 -50 -159 -56 -283 -65 -69 -5 -251 -9 -405 -9 -283 -1 -408 9 -544 45 -146 38 -92 -79 109 -236 41 -33 98 -77 125 -99 143 -115 198 -153 305 -211 36 -20 88 -43 116 -53 90 -29 101 -62 48 -133 -26 -35 -31 -65 -11 -81 43 -36 651 -36 720 0 20 10 226 48 262 48 13 0 53 16 89 35 37 19 77 35 91 35 13 0 40 14 58 30 63 55 97 34 97 -60 0 -78 41 -81 122 -10 26 22 49 40 53 40 4 0 34 20 67 45 33 25 65 45 70 45 6 0 32 19 58 43 26 23 77 66 114 96 36 29 66 57 66 60 0 12 40 51 51 51 6 0 27 -16 46 -35 19 -19 39 -35 43 -35 19 0 144 148 165 194 47 107 98 113 103 13 2 -44 -4 -75 -34 -153 -20 -54 -40 -129 -46 -167 -6 -46 -19 -84 -39 -117 -16 -26 -35 -68 -43 -94 -24 -80 -156 -248 -241 -306 -22 -15 -58 -30 -80 -33 -48 -8 -85 -44 -110 -112 -16 -40 -17 -54 -7 -91 14 -52 15 -371 2 -454 -5 -30 -21 -163 -35 -295 -18 -173 -32 -261 -50 -315 -14 -41 -30 -100 -36 -130 -19 -96 -111 -304 -151 -343 -10 -10 -18 -23 -18 -30 0 -7 -22 -34 -49 -60 -62 -58 -67 -81 -48 -223 26 -182 29 -280 12 -314 -18 -34 -14 -33 -195 -65 -80 -15 -165 -31 -190 -36 -25 -5 -112 -14 -195 -18 -82 -5 -181 -16 -220 -25 -38 -9 -88 -21 -110 -26 -22 -5 -130 -17 -240 -25 -192 -15 -233 -20 -425 -51 -47 -8 -168 -19 -270 -24 -278 -15 -374 -31 -439 -71 -33 -20 -34 -22 -15 -33 26 -15 10668 -22 10732 -6 24 6 81 13 125 16 96 6 170 21 211 41 16 8 74 23 130 33 56 10 131 32 169 49 37 17 90 37 118 45 28 9 63 26 79 40 16 13 43 27 59 31 54 12 179 131 229 218 62 107 65 146 19 257 -40 96 -110 206 -168 264 -21 22 -39 42 -39 45 0 4 -15 15 -32 25 -18 11 -52 35 -75 55 -75 64 -108 89 -148 112 -22 13 -58 38 -79 56 -22 18 -47 33 -55 33 -9 0 -38 17 -64 38 -64 50 -135 95 -177 111 -19 8 -52 27 -72 43 -21 16 -57 35 -80 44 -23 8 -46 18 -52 24 -7 5 -48 23 -91 41 -44 17 -101 42 -127 55 -26 13 -70 29 -97 35 -28 6 -76 24 -108 41 -32 16 -74 35 -93 43 -102 37 -299 197 -585 476 -175 171 -226 210 -313 241 -82 29 -225 36 -277 13 -76 -33 -203 -52 -227 -33 -18 14 -59 125 -113 308 l-34 115 -1 433 c0 399 1 438 20 505 34 128 38 137 74 188 20 27 36 61 36 77 0 16 16 46 40 77 22 28 40 57 40 66 0 9 14 36 30 60 90 130 124 187 131 219 4 19 19 67 32 105 20 55 27 101 34 217 8 141 10 148 36 176 15 16 37 47 50 69 24 45 64 113 116 201 18 31 40 75 47 97 8 22 23 49 34 60 10 11 31 51 46 88 21 55 34 73 66 93 49 31 78 78 78 127 0 47 12 71 58 119 l36 38 -28 58 c-17 35 -26 70 -24 87 l3 30 85 0 c47 0 91 4 97 8 7 4 24 43 37 85 13 42 36 104 50 137 14 33 26 75 26 92 0 18 13 65 29 106 16 40 36 119 45 179 8 58 20 118 26 134 28 74 50 181 50 246 0 40 7 145 15 233 8 88 15 223 15 299 0 113 3 143 16 157 8 9 28 49 44 88 33 81 33 78 -34 223 -21 45 -45 120 -57 178 -11 56 -28 123 -39 150 -10 27 -22 72 -25 102 -4 29 -18 108 -31 174 -28 140 -30 216 -10 358 20 143 27 255 35 548 6 245 7 258 29 287 12 17 22 32 22 35 0 2 -16 24 -36 47 l-36 44 7 77 c4 49 22 124 47 201 33 98 42 140 45 217 3 52 0 107 -5 121 -6 14 -36 48 -66 74 -52 44 -58 47 -74 32 -25 -23 -67 -37 -82 -27 -10 6 -12 31 -6 112 6 97 5 107 -15 132 -23 29 -109 97 -165 132 -19 11 -47 32 -62 46 -38 36 -65 48 -107 48 -32 0 -39 -5 -65 -47z m-2715 -6678 c143 -44 208 -215 276 -731 5 -40 18 -96 28 -125 17 -50 18 -75 10 -324 -5 -148 -13 -337 -19 -420 -5 -82 -10 -213 -10 -290 0 -171 10 -204 101 -319 102 -128 138 -186 160 -256 25 -80 19 -112 -26 -140 -19 -12 -148 -50 -287 -85 -139 -35 -278 -71 -308 -79 -30 -9 -122 -34 -205 -57 -82 -23 -202 -56 -265 -74 -164 -48 -368 -101 -485 -126 -55 -11 -185 -48 -290 -81 -104 -33 -264 -83 -355 -110 -111 -33 -176 -59 -200 -77 -70 -55 -115 -44 -168 40 -53 83 -66 158 -59 347 8 208 30 322 82 412 43 75 167 188 380 346 174 129 280 227 383 353 149 183 175 244 221 521 57 334 102 508 168 639 104 204 374 487 573 599 86 48 207 63 295 37z m1199 -365 c74 -71 76 -74 117 -220 24 -82 44 -131 74 -176 63 -93 66 -104 97 -324 15 -109 22 -228 27 -480 5 -225 11 -345 19 -365 24 -60 35 -74 66 -86 43 -18 46 -26 40 -89 -9 -79 -25 -90 -130 -90 -99 0 -191 -29 -256 -82 -121 -97 -188 -125 -238 -98 -27 14 -74 97 -92 163 -9 32 -30 73 -46 92 -17 19 -33 50 -36 72 -3 21 -7 371 -8 778 -3 853 -7 809 82 905 l56 60 83 0 83 0 62 -60z m-3526 -1172 c50 -54 54 -183 12 -341 -84 -314 -95 -336 -187 -406 -37 -28 -89 -58 -115 -67 -26 -8 -51 -20 -54 -26 -3 -5 5 -22 18 -36 64 -69 100 -149 129 -285 16 -72 33 -163 39 -202 5 -38 19 -131 30 -205 15 -99 19 -159 14 -225 -7 -111 -11 -170 -13 -212 -1 -23 -13 -44 -39 -73 l-39 -40 -254 0 c-314 -1 -496 -17 -599 -54 -41 -15 -109 -38 -152 -52 -72 -23 -82 -30 -183 -130 -59 -57 -120 -111 -136 -119 -15 -8 -51 -15 -79 -15 -94 0 -117 54 -101 240 7 89 13 106 83 265 42 94 96 226 121 295 46 128 117 361 117 386 0 29 118 421 140 464 61 120 161 242 245 299 27 19 111 66 185 104 143 74 292 162 350 207 19 15 67 47 105 70 39 23 98 69 132 100 62 59 103 77 174 79 25 1 42 -6 57 -21z"/>
                        <path d="M3280 3565 c-8 -2 -49 -9 -90 -15 -221 -36 -434 -158 -569 -325 -77 -96 -154 -252 -188 -380 -24 -90 -26 -117 -26 -280 0 -163 2 -189 26 -279 83 -309 291 -542 577 -646 146 -54 208 -64 395 -63 149 0 182 3 266 26 384 101 628 344 721 713 19 76 22 115 22 264 -1 157 -4 185 -27 275 -50 188 -136 335 -270 461 -173 165 -379 242 -667 249 -85 2 -162 2 -170 0z m275 -320 c227 -47 402 -214 477 -455 19 -63 23 -96 23 -210 -1 -161 -15 -224 -80 -357 -74 -149 -190 -251 -357 -311 -64 -23 -88 -26 -203 -27 -107 0 -142 4 -200 22 -165 53 -295 163 -370 316 -65 133 -79 196 -80 357 0 114 4 147 23 210 38 120 89 207 167 286 152 152 378 216 600 169z"/>
                        <path d="M5520 3565 c-8 -2 -49 -9 -90 -15 -221 -36 -434 -158 -569 -325 -77 -96 -154 -252 -188 -380 -24 -90 -26 -117 -26 -280 0 -163 2 -189 26 -279 83 -309 291 -542 577 -646 146 -54 208 -64 395 -63 149 0 182 3 266 26 384 101 628 344 721 713 19 76 22 115 22 264 -1 157 -4 185 -27 275 -50 188 -136 335 -270 461 -173 165 -379 242 -667 249 -85 2 -162 2 -170 0z m275 -320 c227 -47 402 -214 477 -455 19 -63 23 -96 23 -210 -1 -161 -15 -224 -80 -357 -74 -149 -190 -251 -357 -311 -64 -23 -88 -26 -203 -27 -107 0 -142 4 -200 22 -165 53 -295 163 -370 316 -65 133 -79 196 -80 357 0 114 4 147 23 210 38 120 89 207 167 286 152 152 378 216 600 169z"/>
                        <path d="M11998 3555 c-142 -23 -296 -82 -408 -158 -67 -45 -176 -154 -226 -224 -61 -84 -120 -215 -151 -331 -23 -86 -26 -116 -27 -272 0 -149 3 -188 22 -263 94 -377 357 -631 737 -713 100 -22 291 -29 420 -15 198 22 361 66 523 141 l82 39 0 490 0 491 -365 0 -365 0 0 -155 0 -155 195 0 195 0 0 -226 0 -225 -62 -28 c-137 -62 -373 -88 -518 -57 -188 39 -341 158 -424 328 -66 134 -80 197 -81 358 0 114 4 147 23 210 58 186 169 323 322 399 115 56 207 74 340 68 167 -9 332 -68 423 -151 l36 -33 127 128 126 127 -58 46 c-73 58 -195 118 -294 146 -172 47 -419 62 -592 35z"/>
                        <path d="M20818 3555 c-144 -23 -296 -82 -408 -158 -67 -45 -176 -154 -226 -224 -61 -84 -120 -215 -151 -331 -23 -86 -26 -116 -27 -272 0 -148 3 -188 22 -263 118 -471 528 -761 1037 -734 239 13 420 90 573 244 45 46 82 86 82 91 0 4 -62 50 -138 103 l-137 97 -76 -73 c-144 -137 -291 -179 -494 -140 -123 23 -216 74 -311 169 -64 64 -90 99 -122 166 -62 126 -76 192 -77 350 0 114 4 147 23 210 58 186 169 323 322 399 233 114 482 90 648 -64 l57 -53 133 98 133 97 -86 81 c-97 92 -216 158 -345 193 -100 26 -313 34 -432 14z"/>
                        <path d="M29249 3554 c-270 -48 -462 -208 -514 -425 -28 -119 -15 -267 30 -364 65 -136 192 -224 445 -310 199 -67 278 -104 335 -159 123 -118 66 -319 -111 -385 -168 -64 -358 -21 -484 109 l-55 56 -127 -124 -126 -124 69 -64 c127 -116 298 -180 509 -191 380 -19 672 165 735 464 28 129 13 290 -36 384 -31 63 -153 179 -226 217 -34 18 -142 60 -240 93 -303 103 -373 158 -373 294 0 54 40 137 82 168 72 56 211 80 320 58 78 -17 172 -65 206 -107 l29 -35 122 132 122 132 -33 27 c-163 138 -433 199 -679 154z"/>
                        <path d="M20 2570 l0 -950 160 0 160 0 2 790 3 789 290 -790 289 -790 120 3 119 3 287 783 c158 430 290 786 294 789 3 4 6 -350 6 -785 l0 -792 160 0 160 0 0 950 0 950 -256 -2 -257 -3 -253 -655 c-139 -360 -255 -659 -256 -663 -2 -4 -118 292 -257 658 l-254 665 -259 0 -258 0 0 -950z"/>
                        <path d="M6990 2570 l0 -950 170 0 170 0 2 729 3 729 470 -726 470 -727 218 -3 217 -2 0 950 0 950 -170 0 -170 0 -2 -706 -3 -706 -461 703 -460 704 -227 3 -227 2 0 -950z"/>
                        <path d="M9130 2570 l0 -950 575 0 575 0 0 155 0 155 -405 0 -405 0 0 795 0 795 -170 0 -170 0 0 -950z"/>
                        <path d="M10520 2570 l0 -950 170 0 170 0 0 950 0 950 -170 0 -170 0 0 -950z"/>
                        <path d="M13370 2570 l0 -950 170 0 170 0 0 420 0 420 445 0 445 0 0 -420 0 -420 170 0 170 0 0 950 0 950 -170 0 -170 0 0 -375 0 -375 -445 0 -445 0 0 375 0 375 -170 0 -170 0 0 -950z"/>
                        <path d="M15180 3365 l0 -155 290 0 290 0 0 -795 0 -795 170 0 170 0 0 795 0 795 290 0 290 0 0 155 0 155 -750 0 -750 0 0 -155z"/>
                        <path d="M17710 2570 l0 -950 170 0 170 0 0 395 0 395 170 0 c279 0 439 24 565 85 173 83 265 250 265 480 -1 304 -180 484 -535 535 -38 5 -235 10 -437 10 l-368 0 0 -950z m797 636 c67 -21 131 -70 157 -121 16 -31 21 -58 21 -120 0 -96 -21 -144 -84 -192 -71 -55 -122 -65 -348 -70 l-203 -5 0 267 0 267 203 -5 c149 -3 216 -9 254 -21z"/>
                        <path d="M19340 2570 l0 -950 170 0 170 0 0 950 0 950 -170 0 -170 0 0 -950z"/>
                        <path d="M21760 3365 l0 -155 290 0 290 0 0 -795 0 -795 170 0 170 0 0 795 0 795 290 0 290 0 0 155 0 155 -750 0 -750 0 0 -155z"/>
                        <path d="M23482 2843 c4 -673 4 -679 27 -753 38 -127 86 -206 180 -300 148 -147 333 -220 559 -220 226 0 420 76 562 219 113 114 174 234 199 391 7 40 11 306 11 703 l0 637 -170 0 -169 0 -3 -652 c-3 -652 -3 -653 -26 -709 -49 -123 -119 -195 -232 -241 -80 -32 -260 -32 -340 0 -113 46 -183 118 -232 241 -23 56 -23 57 -26 709 l-3 652 -170 0 -170 0 3 -677z"/>
                        <path d="M25440 2570 l0 -950 170 0 170 0 0 405 0 405 123 0 122 0 210 -391 c116 -215 215 -398 220 -405 8 -12 48 -14 210 -12 l201 3 -249 420 c-227 385 -246 420 -225 423 43 6 123 34 181 65 144 76 237 250 237 447 0 303 -187 485 -544 530 -44 5 -248 10 -453 10 l-373 0 0 -950z m770 650 c92 -15 168 -55 205 -108 28 -40 30 -50 30 -131 0 -80 -3 -92 -30 -137 -60 -97 -158 -123 -457 -124 l-178 0 0 255 0 255 183 0 c100 0 211 -5 247 -10z"/>
                        <path d="M27130 2570 l0 -950 655 0 655 0 0 155 0 155 -485 0 -485 0 0 255 0 255 435 0 435 0 0 155 0 155 -435 0 -435 0 0 230 0 230 460 0 460 0 0 155 0 155 -630 0 -630 0 0 -950z"/>
                        <path d="M1690 866 c-114 -32 -218 -113 -266 -207 -156 -309 46 -659 381 -659 332 0 537 348 384 651 -87 173 -308 268 -499 215z m216 -81 c186 -55 287 -264 226 -463 -58 -184 -243 -282 -428 -227 -225 67 -317 358 -178 562 81 118 237 171 380 128z"/>
                        <path d="M28111 865 c-273 -77 -400 -378 -269 -638 106 -212 391 -289 644 -173 l54 25 0 190 0 191 -145 0 -145 0 0 -40 0 -40 100 0 101 0 -3 -127 -3 -128 -55 -19 c-39 -14 -83 -20 -155 -20 -88 -1 -107 2 -155 25 -74 35 -126 89 -164 168 -28 60 -31 75 -31 161 1 83 4 103 29 157 33 73 104 144 172 175 107 47 259 31 347 -36 l45 -34 28 29 c27 28 27 29 9 49 -10 12 -51 37 -90 56 -63 31 -83 36 -166 40 -65 3 -110 -1 -148 -11z"/>
                        <path d="M30 441 l0 -421 45 0 45 0 0 195 0 195 103 0 c177 0 267 37 315 130 41 81 22 190 -44 252 -57 53 -94 62 -286 66 l-178 4 0 -421z m345 321 c85 -29 118 -111 77 -191 -29 -57 -78 -75 -214 -80 l-118 -3 0 146 0 146 103 0 c69 -1 118 -6 152 -18z"/>
                        <path d="M3022 843 c3 -10 59 -199 124 -421 l119 -402 50 0 50 0 105 355 c57 196 107 352 111 348 5 -6 145 -471 201 -671 9 -32 10 -33 60 -30 l51 3 117 395 c64 217 120 405 124 418 7 21 5 22 -38 22 l-45 0 -17 -57 c-9 -32 -56 -195 -104 -363 l-88 -305 -17 60 c-10 33 -57 195 -105 360 l-88 300 -52 0 -53 0 -103 -354 c-57 -195 -105 -355 -107 -357 -1 -2 -49 159 -106 356 l-104 360 -45 0 c-37 0 -44 -3 -40 -17z"/>
                        <path d="M4960 440 l0 -420 270 0 270 0 0 40 0 40 -225 0 -225 0 0 160 0 160 205 0 205 0 0 40 0 40 -205 0 -205 0 0 140 0 140 220 0 220 0 0 40 0 40 -265 0 -265 0 0 -420z"/>
                        <path d="M6360 441 l0 -421 45 0 45 0 0 195 0 196 72 -3 72 -3 115 -192 116 -193 52 0 53 0 -67 108 c-36 59 -91 147 -121 195 -30 49 -52 90 -51 91 2 2 28 11 58 21 104 34 161 125 148 237 -9 73 -44 120 -114 155 -56 27 -63 28 -240 31 l-183 4 0 -421z m374 315 c69 -34 96 -118 61 -186 -28 -54 -84 -74 -222 -78 l-123 -4 0 147 0 147 123 -4 c94 -3 131 -8 161 -22z"/>
                        <path d="M8750 440 l0 -422 183 4 c202 5 244 15 311 70 72 59 95 160 57 243 -25 54 -60 84 -121 105 -47 16 -49 18 -26 24 40 10 93 63 112 112 38 100 -5 206 -104 252 -54 25 -67 27 -234 30 l-178 4 0 -422z m364 314 c97 -50 101 -194 6 -249 -29 -16 -57 -21 -157 -24 l-123 -3 0 152 0 152 118 -3 c94 -3 125 -8 156 -25z m30 -359 c53 -27 78 -63 83 -122 6 -66 -20 -111 -83 -143 -43 -22 -64 -25 -176 -29 l-128 -3 0 162 0 162 133 -4 c107 -2 139 -7 171 -23z"/>
                        <path d="M10200 440 l0 -420 270 0 270 0 0 40 0 40 -225 0 -225 0 0 160 0 160 205 0 205 0 0 40 0 40 -205 0 -205 0 0 140 0 140 220 0 220 0 0 40 0 40 -265 0 -265 0 0 -420z"/>
                        <path d="M11590 440 l0 -420 45 0 45 0 0 200 0 200 230 0 230 0 0 -200 0 -200 45 0 45 0 0 420 0 420 -45 0 -45 0 0 -180 0 -180 -230 0 -230 0 0 180 0 180 -45 0 -45 0 0 -420z"/>
                        <path d="M13140 440 l0 -420 45 0 45 0 0 420 0 420 -45 0 -45 0 0 -420z"/>
                        <path d="M14140 440 l0 -420 45 0 45 0 0 362 0 361 246 -361 247 -362 53 0 54 0 0 420 0 420 -45 0 -45 0 -2 -356 -3 -355 -244 355 -244 356 -53 0 -54 0 0 -420z"/>
                        <path d="M15740 440 l0 -420 168 0 c182 0 244 10 333 55 286 145 293 573 11 723 -96 51 -156 62 -344 62 l-168 0 0 -420z m410 316 c79 -29 141 -84 180 -160 32 -63 35 -76 35 -156 0 -80 -3 -93 -35 -156 -25 -50 -49 -79 -85 -106 -77 -58 -121 -70 -277 -75 l-138 -5 0 342 0 342 138 -5 c92 -3 152 -10 182 -21z"/>
                        <path d="M18190 820 l0 -40 140 0 140 0 0 -380 0 -380 45 0 45 0 0 380 0 380 140 0 140 0 0 40 0 40 -325 0 -325 0 0 -40z"/>
                        <path d="M19660 440 l0 -420 45 0 45 0 0 200 0 200 230 0 230 0 0 -200 0 -200 45 0 45 0 0 420 0 420 -45 0 -45 0 0 -180 0 -180 -230 0 -230 0 0 180 0 180 -45 0 -45 0 0 -420z"/>
                        <path d="M21200 440 l0 -420 270 0 270 0 0 40 0 40 -225 0 -225 0 0 160 0 160 205 0 205 0 0 40 0 40 -205 0 -205 0 0 140 0 140 220 0 220 0 0 40 0 40 -265 0 -265 0 0 -420z"/>
                        <path d="M23590 440 l0 -420 45 0 45 0 0 420 0 420 -45 0 -45 0 0 -420z"/>
                        <path d="M24590 440 l0 -420 45 0 45 0 2 359 3 359 150 -356 c140 -332 152 -357 175 -357 23 0 35 25 175 357 l150 356 3 -359 2 -359 45 0 45 0 0 420 0 421 -67 -3 -67 -3 -141 -343 c-91 -222 -143 -338 -148 -330 -5 7 -70 162 -145 343 l-137 330 -68 3 -67 3 0 -421z"/>
                        <path d="M26523 693 c-40 -92 -121 -282 -182 -420 l-109 -253 47 0 47 0 45 107 44 108 220 2 220 3 45 -110 45 -110 47 0 c41 0 46 2 41 18 -4 9 -84 197 -179 417 l-173 400 -43 3 -43 3 -72 -168z m210 -163 l85 -205 -88 -3 c-49 -1 -132 -1 -184 0 l-95 3 92 221 c60 145 94 216 99 205 3 -9 45 -108 91 -221z"/>
                        <path d="M29450 440 l0 -420 270 0 270 0 0 40 0 40 -225 0 -225 0 0 160 0 160 205 0 205 0 0 40 0 40 -205 0 -205 0 0 140 0 140 220 0 220 0 0 40 0 40 -265 0 -265 0 0 -420z"/>
                    </g>
                </svg>
            </li>*/}
        </ul>
            <div className='copy_right'>ALL RIGHTS RESERVED 2021 © MOONLIGHT PICTURES</div>
        </div>
    )
}
export default Footer