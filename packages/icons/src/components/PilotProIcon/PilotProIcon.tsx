import React, { forwardRef } from 'react'
import { styled } from 'styled-components'
import { withSystemProps } from '@modjs-youtube/utils'
import { IconProps } from '../../utils/IconProps'

const ModPilotProIcon = styled.svg<IconProps>`
    fill: ${props => (props.fill ? props.fill : props.theme.color.primary)};
    height: 4em;
    width: 14em;
`

const PilotProIcon = (
    { fill, ...props }: IconProps,
    ref?: React.Ref<HTMLElement>,
) => {
    return (
        <ModPilotProIcon
            {...props}
            ref={ref}
            version="1.0"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="700 0 500 417"
            preserveAspectRatio="xMidYMid meet"
            data-test="pilotpro-icon"
        >
            <title>PilotPro Icon</title>
            <metadata>
                Created by Prashan Pudasaini on Thursday, April 13th, 2024 @
                fullstackpro.io
            </metadata>
            <g
                transform="translate(0.000000,417.000000) scale(0.100000,-0.100000)"
                fill={fill}
                stroke="none"
            >
                <path
                    d="M2385 3098 c-77 -182 -88 -227 -88 -363 0 -127 10 -172 65 -274 29
        -55 104 -138 157 -176 23 -15 41 -32 41 -37 0 -13 -65 -5 -107 13 -48 20 -57
        5 -39 -67 8 -32 21 -75 29 -94 38 -85 155 -172 262 -195 69 -14 105 -26 105
        -35 0 -12 -57 -43 -90 -50 -49 -10 -22 -57 50 -86 86 -35 101 -37 245 -39 83
        -2 152 -3 154 -4 3 0 -6 -12 -18 -25 -22 -23 -54 -39 -143 -71 -27 -9 -48 -21
        -48 -26 0 -25 170 -70 265 -70 62 0 166 20 222 42 18 7 35 10 39 6 9 -9 -31
        -52 -74 -79 -18 -11 -30 -24 -25 -28 13 -12 148 -40 193 -40 55 0 171 31 177
        48 3 7 -19 45 -49 85 -108 143 -148 242 -148 368 0 108 28 197 98 307 19 29
        32 58 29 66 -8 21 -142 198 -163 217 -57 49 -130 76 -254 93 -328 46 -552 142
        -699 302 -51 56 -81 105 -135 223 -17 38 -31 35 -51 -11z"
                />
                <path
                    d="M6817 3105 c-9 -20 -17 -40 -17 -45 0 -25 -79 -139 -137 -196 -91
        -90 -239 -179 -338 -205 -16 -4 -43 -12 -60 -18 -63 -21 -154 -40 -275 -57
        -69 -10 -144 -26 -166 -36 -59 -26 -139 -101 -191 -180 -25 -37 -49 -70 -54
        -74 -14 -8 -11 -45 5 -63 23 -27 65 -109 86 -169 28 -80 28 -246 0 -321 -32
        -83 -53 -120 -119 -206 -34 -44 -60 -83 -58 -89 4 -12 133 -45 177 -46 52 0
        200 33 199 45 0 5 -21 24 -47 40 -50 32 -67 65 -35 65 11 0 23 -4 29 -10 16
        -16 207 -51 241 -45 10 2 47 9 83 16 79 15 153 46 147 62 -2 7 -26 19 -54 27
        -57 17 -143 68 -143 85 0 8 45 11 148 11 122 -1 155 2 192 18 75 31 114 54
        128 75 13 18 11 21 -15 27 -15 4 -45 15 -66 26 -50 25 -38 39 45 57 172 35
        272 126 318 287 23 80 16 95 -33 75 -17 -8 -49 -16 -69 -18 -30 -4 -38 -2 -38
        11 0 9 6 16 13 16 15 0 101 82 143 135 17 22 46 72 65 110 33 69 33 71 34 215
        0 115 -4 156 -19 200 -30 91 -84 210 -95 210 -4 0 -15 -16 -24 -35z"
                />
                <path
                    d="M4034 2371 c-187 -60 -318 -195 -360 -371 -60 -249 97 -474 581 -836
        212 -159 328 -221 392 -211 138 23 612 383 799 607 56 68 62 76 100 146 23 42
        54 154 54 195 0 33 -26 134 -47 184 -41 95 -155 213 -243 251 -104 45 -145 54
        -250 54 -140 0 -216 -23 -358 -108 -40 -24 -79 -41 -85 -38 -7 4 -25 15 -42
        26 -45 29 -163 85 -220 103 -67 23 -249 22 -321 -2z"
                />
            </g>
        </ModPilotProIcon>
    )
}

export default withSystemProps(forwardRef(PilotProIcon))
