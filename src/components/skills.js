import React, { Component } from 'react';


export class skills extends Component {
    render() {
        return (
            <div>
                <div>
                    <div id="languages">
                        <p>Languages</p>
                        <div id="langIcons">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
width="50" height="50"
viewBox="0 0 50 50"
><path d="M 24 2 C 16.832 2 11 10.292328 11 20.486328 C 11 25.581015 12.484998 30.154506 14.841797 33.492188 C 14.278671 34.225786 14 35.114721 14 36 C 14 36.972222 14.318681 37.957881 15.001953 38.726562 C 15.685226 39.495244 16.75 40 18 40 C 19.25 40 20.314774 39.495244 20.998047 38.726562 C 21.681319 37.957881 22 36.972222 22 36 C 22 35.027778 21.681319 34.042119 20.998047 33.273438 C 20.314774 32.504756 19.25 32 18 32 C 17.417923 32 16.88232 32.117915 16.400391 32.3125 C 14.317709 29.317793 13 25.144037 13 20.486328 C 13 11.395328 17.935 4 24 4 C 29.419 4 33.923219 9.9093906 34.824219 17.650391 C 35.531219 17.919391 36.232734 18.222641 36.927734 18.556641 C 36.246734 9.2666406 30.71 2 24 2 z M 22 15 C 20.75 15 19.685226 15.504756 19.001953 16.273438 C 18.318681 17.042119 18 18.027778 18 19 C 18 19.972222 18.318681 20.957881 19.001953 21.726562 C 19.685226 22.495244 20.75 23 22 23 C 23.25 23 24.314774 22.495244 24.998047 21.726562 C 25.425092 21.246137 25.694239 20.67767 25.847656 20.083984 C 29.425245 19.930128 33.445887 20.987107 37.142578 23.203125 C 45.036578 27.935125 49.012859 36.186703 46.005859 41.595703 C 44.931859 43.526703 43.056938 44.897594 40.585938 45.558594 C 37.123937 46.486594 32.8715 45.916078 28.8125 44.080078 C 28.2265 44.551078 27.60675 44.996734 26.96875 45.427734 C 30.29375 47.106734 33.8125 47.996094 37.0625 47.996094 C 38.4735 47.996094 39.833516 47.830234 41.103516 47.490234 C 44.110516 46.685234 46.410906 44.982406 47.753906 42.566406 C 51.277906 36.224406 46.978922 26.769281 38.169922 21.488281 C 34.19387 19.103202 29.825568 17.936523 25.886719 18.064453 C 25.744166 17.416386 25.4608 16.794034 24.998047 16.273438 C 24.314774 15.504756 23.25 15 22 15 z M 22 17 C 22.749999 17 23.185226 17.245244 23.501953 17.601562 C 23.81868 17.957881 24 18.472222 24 19 C 24 19.527778 23.81868 20.042119 23.501953 20.398438 C 23.185226 20.754756 22.749999 21 22 21 C 21.250001 21 20.814774 20.754756 20.498047 20.398438 C 20.18132 20.042119 20 19.527778 20 19 C 20 18.472222 20.18132 17.957881 20.498047 17.601562 C 20.814774 17.245244 21.250001 17 22 17 z M 9.1621094 23.332031 C 2.1981094 28.772031 -0.89795313 36.906406 2.2480469 42.566406 C 3.5910469 44.982406 5.8914375 46.683281 8.8984375 47.488281 C 10.169438 47.828281 11.528453 47.996094 12.939453 47.996094 C 16.739453 47.996094 20.911031 46.787719 24.707031 44.511719 C 29.262758 41.780488 32.543671 37.933128 34.212891 33.978516 C 35.367764 33.923167 36.355158 33.449812 36.998047 32.726562 C 37.681319 31.957881 38 30.972222 38 30 C 38 29.027778 37.681319 28.042118 36.998047 27.273438 C 36.314774 26.504756 35.25 26 34 26 C 32.75 26 31.685226 26.504756 31.001953 27.273438 C 30.318681 28.042119 30 29.027778 30 30 C 30 30.972222 30.318681 31.957882 31.001953 32.726562 C 31.334027 33.100145 31.760237 33.407648 32.25 33.628906 C 30.681548 37.037695 27.715244 40.376565 23.677734 42.796875 C 18.927734 45.645875 13.596062 46.678594 9.4140625 45.558594 C 6.9420625 44.896594 5.0690938 43.526703 3.9960938 41.595703 C 1.4540938 37.022703 3.9149531 30.427766 9.5019531 25.634766 C 9.3569531 24.883766 9.2441094 24.114031 9.1621094 23.332031 z M 34 28 C 34.749999 28 35.185226 28.245244 35.501953 28.601562 C 35.81868 28.957881 36 29.472222 36 30 C 36 30.527778 35.81868 31.042118 35.501953 31.398438 C 35.185226 31.754756 34.749999 32 34 32 C 33.250001 32 32.814774 31.754756 32.498047 31.398438 C 32.18132 31.042119 32 30.527778 32 30 C 32 29.472222 32.18132 28.957882 32.498047 28.601562 C 32.814774 28.245244 33.250001 28 34 28 z M 18 34 C 18.749999 34 19.185226 34.245244 19.501953 34.601562 C 19.81868 34.957881 20 35.472222 20 36 C 20 36.527778 19.81868 37.042119 19.501953 37.398438 C 19.185226 37.754756 18.749999 38 18 38 C 17.250001 38 16.814774 37.754756 16.498047 37.398438 C 16.18132 37.042119 16 36.527778 16 36 C 16 35.472222 16.18132 34.957881 16.498047 34.601562 C 16.814774 34.245244 17.250001 34 18 34 z"></path></svg>
<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
width="80" height="80"
viewBox="0 0 40 40"
><path fill="#98ccfd" d="M23.5,20c0,1.935-1.565,3.5-3.5,3.5s-3.5-1.565-3.5-3.5s1.565-3.5,3.5-3.5S23.5,18.065,23.5,20z"></path><path fill="#4788c7" d="M20,24c-2.206,0-4-1.794-4-4s1.794-4,4-4s4,1.794,4,4S22.206,24,20,24z M20,17c-1.654,0-3,1.346-3,3 s1.346,3,3,3s3-1.346,3-3S21.654,17,20,17z"></path><g><path fill="#98ccfd" d="M39.5,20c0-2.796-2.912-5.232-7.492-6.787c0.576-2.671,0.655-5.055,0.166-6.881 c-0.408-1.522-1.181-2.617-2.296-3.253c-0.671-0.382-1.438-0.577-2.279-0.577c-2.207,0-4.893,1.401-7.597,3.791 C17.296,3.902,14.609,2.5,12.4,2.5c-0.842,0-1.608,0.194-2.279,0.577C9.006,3.714,8.232,4.81,7.825,6.333 c-0.489,1.826-0.41,4.21,0.165,6.88C3.412,14.768,0.5,17.205,0.5,20s2.912,5.232,7.491,6.786c-0.576,2.67-0.655,5.054-0.165,6.88 c0.407,1.524,1.181,2.619,2.297,3.257c0.671,0.382,1.438,0.577,2.279,0.577c0.001,0,0,0,0.001,0c2.208,0,4.894-1.401,7.598-3.793 c2.704,2.389,5.39,3.789,7.597,3.79c0.001,0,0.001,0,0.001,0c0.842,0,1.608-0.194,2.28-0.577c1.114-0.636,1.887-1.731,2.294-3.253 c0.489-1.826,0.41-4.21-0.165-6.88C36.587,25.233,39.5,22.796,39.5,20z M28.888,4.817c0.634,0.362,1.09,1.046,1.354,2.033 c0.401,1.496,0.322,3.509-0.158,5.79c-1.596-0.417-3.343-0.734-5.208-0.938c-1.11-1.502-2.269-2.855-3.44-4.041 c2.397-2.087,4.598-3.158,6.163-3.158C28.089,4.503,28.522,4.609,28.888,4.817z M25.784,23.287 c-0.653,1.117-1.324,2.152-2.003,3.119c-1.205,0.105-2.467,0.162-3.782,0.162c-1.316,0-2.578-0.058-3.784-0.162 c-0.679-0.967-1.35-2.002-2.003-3.119C13.576,22.197,13,21.096,12.481,20c0.519-1.095,1.095-2.197,1.732-3.287 c0.653-1.117,1.325-2.152,2.004-3.12c1.205-0.105,2.468-0.162,3.783-0.162c1.315,0,2.577,0.057,3.781,0.162 c0.679,0.968,1.35,2.002,2.003,3.119c0.637,1.09,1.214,2.192,1.733,3.287C26.998,21.096,26.421,22.197,25.784,23.287z M28.558,22.392c0.41,1.036,0.756,2.052,1.041,3.035c-0.99,0.258-2.057,0.478-3.194,0.655c0.377-0.582,0.748-1.174,1.106-1.787 C27.881,23.663,28.226,23.028,28.558,22.392z M20,30.983c-0.729-0.738-1.467-1.556-2.205-2.47c0.724,0.034,1.457,0.055,2.205,0.055 c0.747,0,1.48-0.021,2.203-0.055C21.466,29.427,20.729,30.246,20,30.983z M13.593,26.082c-1.136-0.177-2.203-0.397-3.193-0.655 c0.285-0.983,0.63-1.998,1.04-3.034c0.332,0.635,0.677,1.271,1.046,1.903C12.844,24.908,13.216,25.5,13.593,26.082z M11.44,17.607 c-0.41-1.036-0.755-2.051-1.04-3.034c0.99-0.258,2.057-0.478,3.194-0.655c-0.377,0.582-0.749,1.174-1.107,1.786 C12.117,16.337,11.772,16.972,11.44,17.607z M20.001,9.018c0.729,0.737,1.466,1.555,2.202,2.469 c-0.723-0.034-1.456-0.055-2.203-0.055s-1.48,0.021-2.203,0.055C18.534,10.573,19.272,9.755,20.001,9.018z M27.511,15.704 c-0.358-0.613-0.729-1.205-1.106-1.787c1.137,0.177,2.204,0.397,3.194,0.655c-0.285,0.984-0.631,1.999-1.041,3.036 C28.226,16.973,27.881,16.337,27.511,15.704z M9.757,6.851c0.265-0.989,0.721-1.674,1.355-2.037C11.478,4.606,11.911,4.5,12.4,4.5 c1.567,0,3.768,1.072,6.166,3.161c-1.172,1.187-2.332,2.539-3.443,4.042c-1.865,0.204-3.612,0.522-5.208,0.939 C9.435,10.359,9.356,8.346,9.757,6.851z M2.5,20c0-1.729,2.231-3.566,5.983-4.857C8.935,16.708,9.538,18.342,10.28,20 c-0.742,1.658-1.345,3.292-1.797,4.857C4.731,23.566,2.5,21.729,2.5,20z M12.401,35.5c-0.49,0-0.924-0.106-1.288-0.313 c-0.636-0.363-1.092-1.048-1.356-2.037c-0.401-1.496-0.322-3.509,0.158-5.79c1.596,0.417,3.342,0.734,5.207,0.938 c1.111,1.503,2.271,2.856,3.444,4.043C16.168,34.429,13.967,35.5,12.401,35.5z M30.241,33.15c-0.265,0.987-0.72,1.671-1.354,2.033 c-0.365,0.208-0.799,0.314-1.289,0.314c-1.566,0-3.767-1.071-6.164-3.157c1.172-1.187,2.331-2.54,3.441-4.042 c1.865-0.204,3.611-0.522,5.207-0.938C30.563,29.641,30.642,31.654,30.241,33.15z M31.515,24.858 c-0.452-1.565-1.055-3.199-1.797-4.858c0.742-1.659,1.345-3.293,1.797-4.858C35.268,16.433,37.5,18.271,37.5,20 C37.5,21.729,35.268,23.567,31.515,24.858z"></path><path fill="#4788c7" d="M12.402,38c-0.93,0-1.78-0.216-2.528-0.642c-1.237-0.708-2.089-1.906-2.532-3.563 c-0.472-1.762-0.446-4.064,0.07-6.682C2.694,25.42,0,22.842,0,20s2.694-5.42,7.412-7.114c-0.517-2.617-0.542-4.92-0.07-6.682 C7.785,4.548,8.637,3.35,9.873,2.643c2.52-1.438,6.178-0.393,10.128,2.988c3.949-3.378,7.604-4.422,10.125-2.986 c1.235,0.705,2.087,1.902,2.531,3.558c0.472,1.763,0.446,4.066-0.071,6.683C37.305,14.579,40,17.158,40,20 c0,2.842-2.695,5.421-7.414,7.115c0.518,2.617,0.542,4.919,0.07,6.682c-0.443,1.656-1.294,2.853-2.529,3.558 C27.604,38.793,23.946,37.746,20,34.37C17.224,36.747,14.604,38,12.402,38z M12.4,3c-0.753,0-1.437,0.172-2.031,0.511 C9.373,4.081,8.68,5.074,8.309,6.462c-0.458,1.707-0.398,4.005,0.171,6.646l0.094,0.436l-0.422,0.144C3.606,15.23,1,17.531,1,20 s2.606,4.77,7.151,6.313l0.422,0.144l-0.094,0.436c-0.569,2.641-0.629,4.939-0.171,6.646c0.371,1.389,1.064,2.382,2.062,2.952 C10.965,36.828,11.648,37,12.401,37h0.001c2.012,0,4.592-1.302,7.267-3.667L20,33.04l0.331,0.293 c2.674,2.362,5.255,3.664,7.267,3.664c0.754,0,1.438-0.172,2.034-0.511c0.994-0.568,1.687-1.56,2.058-2.948 c0.458-1.707,0.398-4.004-0.171-6.645l-0.094-0.436l0.422-0.144C36.393,24.771,39,22.469,39,20c0-2.47-2.607-4.771-7.153-6.313 l-0.422-0.144l0.095-0.436c0.569-2.641,0.629-4.939,0.171-6.646c-0.372-1.389-1.065-2.38-2.061-2.948 c-0.595-0.339-1.278-0.511-2.031-0.511c-2.011,0-4.591,1.302-7.267,3.666l-0.331,0.293L19.67,6.668C16.994,4.303,14.413,3,12.4,3z M12.401,36c-0.577,0-1.094-0.127-1.535-0.379c-0.756-0.432-1.292-1.22-1.593-2.342c-0.408-1.527-0.355-3.61,0.152-6.022 l0.108-0.513l0.507,0.132c1.591,0.415,3.317,0.727,5.135,0.925l0.217,0.024L15.523,28c1.073,1.451,2.217,2.793,3.397,3.989 l0.374,0.379l-0.401,0.35C16.464,34.834,14.158,36,12.401,36z M10.303,27.973c-0.468,2.04-0.482,3.777-0.063,5.047 c0.278,0.841,0.605,1.438,1.121,1.732c1.294,0.739,3.813-0.237,6.473-2.446c-1.033-1.08-2.035-2.267-2.984-3.536 C13.257,28.588,11.73,28.32,10.303,27.973z M27.599,35.997c-1.757,0-4.063-1.165-6.491-3.28l-0.401-0.349l0.374-0.379 c1.185-1.202,2.327-2.543,3.394-3.988l0.13-0.176l0.218-0.024c1.819-0.199,3.548-0.51,5.137-0.925l0.508-0.132l0.107,0.513 c0.507,2.414,0.56,4.496,0.151,6.022c-0.301,1.121-0.836,1.908-1.589,2.338C28.693,35.87,28.176,35.997,27.599,35.997z M22.166,32.306c2.66,2.207,5.171,3.184,6.475,2.443c0.513-0.292,0.839-0.889,1.117-1.728c0.422-1.271,0.405-3.008-0.062-5.047 c-1.427,0.347-2.954,0.614-4.549,0.797C24.204,30.035,23.203,31.221,22.166,32.306z M20,31.695l-0.355-0.36 c-0.773-0.782-1.526-1.625-2.238-2.508l-0.7-0.867l1.112,0.053c1.431,0.068,2.931,0.068,4.361,0l1.111-0.053l-0.698,0.866 c-0.71,0.879-1.462,1.723-2.237,2.507L20,31.695z M18.898,29.054c0.359,0.417,0.728,0.822,1.102,1.212 c0.374-0.392,0.741-0.796,1.101-1.212C20.372,29.073,19.627,29.073,18.898,29.054z M20,27.068c-1.284,0-2.571-0.055-3.827-0.164 l-0.232-0.02l-0.134-0.191c-0.721-1.027-1.402-2.089-2.025-3.154c-0.619-1.061-1.209-2.179-1.753-3.325L11.927,20l0.102-0.214 c0.544-1.146,1.134-2.265,1.753-3.325c0.63-1.078,1.293-2.109,2.027-3.155l0.134-0.19l0.232-0.02c2.508-0.218,5.142-0.218,7.649,0 l0.232,0.02l0.134,0.191c0.736,1.05,1.399,2.082,2.025,3.154c0.625,1.07,1.215,2.188,1.753,3.326L28.069,20l-0.101,0.214 c-0.538,1.137-1.128,2.256-1.753,3.326c-0.626,1.072-1.289,2.104-2.025,3.154l-0.134,0.191l-0.232,0.02 C22.57,27.013,21.284,27.068,20,27.068z M16.491,25.928c2.309,0.187,4.71,0.187,7.015,0c0.667-0.961,1.272-1.91,1.847-2.893 c0.571-0.977,1.112-1.997,1.61-3.035c-0.498-1.038-1.039-2.058-1.61-3.035c-0.574-0.983-1.18-1.932-1.847-2.893 c-2.306-0.187-4.711-0.187-7.013,0c-0.665,0.958-1.271,1.906-1.849,2.894c-0.565,0.968-1.107,1.988-1.61,3.034 c0.503,1.045,1.044,2.065,1.61,3.035C15.215,24.01,15.836,24.982,16.491,25.928z M25.377,26.749l0.607-0.938 c0.373-0.576,0.74-1.162,1.095-1.767c0.366-0.626,0.707-1.255,1.035-1.883l0.506-0.968l0.402,1.016 c0.405,1.023,0.761,2.06,1.057,3.081l0.143,0.494l-0.497,0.129c-1.017,0.264-2.107,0.488-3.243,0.665L25.377,26.749z M28.479,23.6 c-0.174,0.316-0.353,0.633-0.537,0.949c-0.168,0.288-0.34,0.571-0.513,0.851c0.528-0.1,1.042-0.209,1.54-0.329 C28.819,24.581,28.655,24.09,28.479,23.6z M14.621,26.749l-1.105-0.172c-1.136-0.177-2.227-0.401-3.241-0.665l-0.497-0.129 l0.143-0.493c0.294-1.017,0.649-2.053,1.056-3.08l0.402-1.017l0.506,0.97c0.327,0.628,0.668,1.256,1.034,1.882 c0.354,0.605,0.722,1.191,1.095,1.767L14.621,26.749z M11.029,25.069c0.496,0.119,1.01,0.229,1.537,0.329 c-0.173-0.279-0.344-0.562-0.512-0.85c-0.185-0.315-0.362-0.631-0.536-0.948C11.342,24.092,11.179,24.582,11.029,25.069z M31.18,25.502l-0.146-0.505c-0.446-1.548-1.043-3.16-1.772-4.792L29.17,20l0.092-0.204c0.729-1.63,1.326-3.243,1.773-4.792 l0.146-0.505l0.498,0.171C35.637,16.031,38,18.024,38,20c0,1.977-2.363,3.969-6.322,5.331L31.18,25.502z M30.265,20 c0.63,1.427,1.159,2.84,1.579,4.209C34.993,23.039,37,21.412,37,20s-2.007-3.039-5.156-4.209 C31.424,17.162,30.894,18.574,30.265,20z M8.817,25.501L8.32,25.33C4.363,23.968,2,21.976,2,20s2.363-3.968,6.32-5.33l0.497-0.171 l0.146,0.505c0.449,1.554,1.045,3.167,1.772,4.792L10.828,20l-0.092,0.204c-0.728,1.625-1.323,3.238-1.772,4.792L8.817,25.501z M8.155,15.791C5.006,16.962,3,18.589,3,20s2.006,3.038,5.155,4.209c0.421-1.375,0.95-2.787,1.578-4.209 C9.105,18.578,8.576,17.166,8.155,15.791z M11.378,18.809l-0.402-1.017c-0.406-1.027-0.762-2.063-1.056-3.08l-0.143-0.493 l0.497-0.129c1.016-0.264,2.106-0.488,3.242-0.665l1.106-0.172l-0.61,0.939c-0.373,0.575-0.74,1.161-1.095,1.766 c-0.366,0.625-0.707,1.254-1.034,1.882L11.378,18.809z M11.029,14.931c0.149,0.487,0.313,0.978,0.489,1.469 c0.174-0.316,0.352-0.632,0.536-0.948c0.168-0.287,0.339-0.57,0.512-0.85C12.039,14.701,11.525,14.812,11.029,14.931z M28.62,18.809l-0.506-0.969c-0.328-0.629-0.669-1.257-1.035-1.883c-0.354-0.605-0.722-1.191-1.095-1.767l-0.607-0.938l1.104,0.172 c1.137,0.177,2.229,0.401,3.243,0.666l0.497,0.129l-0.143,0.494c-0.296,1.02-0.651,2.057-1.057,3.081L28.62,18.809z M27.43,14.601 c0.173,0.28,0.345,0.563,0.513,0.851c0.185,0.316,0.363,0.632,0.537,0.949c0.176-0.491,0.34-0.982,0.49-1.47 C28.473,14.811,27.958,14.701,27.43,14.601z M30.465,13.257l-0.507-0.132c-1.587-0.415-3.315-0.726-5.137-0.925l-0.218-0.024 l-0.13-0.176c-1.07-1.449-2.212-2.791-3.394-3.987l-0.374-0.379l0.401-0.35c3.229-2.811,6.243-3.919,8.027-2.901 c0.755,0.431,1.29,1.218,1.591,2.338c0.408,1.527,0.355,3.61-0.152,6.023L30.465,13.257z M25.147,11.229 c1.597,0.183,3.123,0.451,4.549,0.798c0.517-1.907,0.59-3.595,0.063-5.048c-0.302-0.83-0.604-1.435-1.119-1.729 c-1.298-0.74-3.812,0.236-6.473,2.444C23.2,8.775,24.201,9.962,25.147,11.229z M9.534,13.257l-0.108-0.513 c-0.508-2.413-0.561-4.495-0.152-6.022c0.301-1.123,0.836-1.911,1.591-2.341c1.789-1.02,4.801,0.091,8.03,2.904l0.402,0.35 l-0.375,0.379c-1.184,1.197-2.326,2.539-3.396,3.987l-0.13,0.176l-0.218,0.024c-1.818,0.199-3.547,0.51-5.137,0.925L9.534,13.257z M12.4,5c-0.401,0-0.751,0.083-1.041,0.249c-0.514,0.293-0.774,0.916-1.119,1.731c-0.54,1.275-0.449,3.011,0.063,5.047 c1.428-0.347,2.954-0.615,4.549-0.798c0.946-1.267,1.948-2.453,2.983-3.534C15.766,5.977,13.803,5,12.4,5z M16.709,12.039 l0.699-0.866c0.71-0.88,1.463-1.723,2.237-2.507l0.355-0.36l0.355,0.36c0.777,0.787,1.529,1.63,2.236,2.506l0.697,0.866 l-1.11-0.052c-1.43-0.067-2.93-0.067-4.359,0L16.709,12.039z M20,10.932c0.37,0,0.737,0.005,1.101,0.014 c-0.357-0.415-0.726-0.819-1.1-1.211c-0.374,0.391-0.742,0.795-1.101,1.211C19.264,10.937,19.63,10.932,20,10.932z"></path></g></svg>
<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
width="144" height="144"
viewBox="0 0 48 48"
><path fill="#E65100" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"></path><path fill="#FF6D00" d="M24 8L24 39.9 35.2 36.7 37.7 8z"></path><path fill="#FFF" d="M24,25v-4h8.6l-0.7,11.5L24,35.1v-4.2l4.1-1.4l0.3-4.5H24z M32.9,17l0.3-4H24v4H32.9z"></path><path fill="#EEE" d="M24,30.9v4.2l-7.9-2.6L15.7,27h4l0.2,2.5L24,30.9z M19.1,17H24v-4h-9.1l0.7,12H24v-4h-4.6L19.1,17z"></path></svg>
<div>
<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
width="120" height="120"
viewBox="0 0 172 172"
><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" ><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#9b59b6"><path d="M145.7872,19.1092c-1.08933,-1.21547 -2.64307,-1.9092 -4.27133,-1.9092h-111.03173c-1.62827,0 -3.182,0.69373 -4.27133,1.9092c-1.08933,1.21547 -1.60533,2.838 -1.4276,4.4548l12.6248,113.65187c0.25227,2.31053 1.88627,4.24267 4.12227,4.87907l42.88533,12.25213c0.516,0.14907 1.0492,0.2236 1.57667,0.2236c0.52747,0 1.06067,-0.07453 1.57667,-0.2236l42.88533,-12.25213c2.236,-0.6364 3.86427,-2.56853 4.12227,-4.87907l12.63053,-113.65187c0.18347,-1.6168 -0.33253,-3.23933 -1.42187,-4.4548zM117.62507,74.9576l-2.55707,41.76733l-28.88453,9.4428l-28.88453,-9.4428l-1.09507,-19.97493h14.62l0.36693,9.0816l14.99267,5.08547l14.99267,-5.08547l1.09507,-16.34h-32.17547l-0.72813,-14.52827h33.63747l1.09507,-14.52827h-50.45907l-1.09507,-14.534h66.908z"></path></g></g></svg>
</div>
<div>
<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
width="144" height="144"
viewBox="0 0 48 48"
><path fill="#ffd600" d="M6,42V6h36v36H6z"></path><path fill="#000001" d="M29.538 32.947c.692 1.124 1.444 2.201 3.037 2.201 1.338 0 2.04-.665 2.04-1.585 0-1.101-.726-1.492-2.198-2.133l-.807-.344c-2.329-.988-3.878-2.226-3.878-4.841 0-2.41 1.845-4.244 4.728-4.244 2.053 0 3.528.711 4.592 2.573l-2.514 1.607c-.553-.988-1.151-1.377-2.078-1.377-.946 0-1.545.597-1.545 1.377 0 .964.6 1.354 1.985 1.951l.807.344C36.452 29.645 38 30.839 38 33.523 38 36.415 35.716 38 32.65 38c-2.999 0-4.702-1.505-5.65-3.368L29.538 32.947zM17.952 33.029c.506.906 1.275 1.603 2.381 1.603 1.058 0 1.667-.418 1.667-2.043V22h3.333v11.101c0 3.367-1.953 4.899-4.805 4.899-2.577 0-4.437-1.746-5.195-3.368L17.952 33.029z"></path></svg>
</div>
<div>
<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
width="144" height="144"
viewBox="0 0 48 48"
><path fill="#21a366" d="M24.007,45.419c-0.574,0-1.143-0.15-1.646-0.44l-5.24-3.103c-0.783-0.438-0.401-0.593-0.143-0.682	c1.044-0.365,1.255-0.448,2.369-1.081c0.117-0.067,0.27-0.043,0.39,0.028l4.026,2.389c0.145,0.079,0.352,0.079,0.486,0l15.697-9.061	c0.145-0.083,0.24-0.251,0.24-0.424V14.932c0-0.181-0.094-0.342-0.243-0.432L24.253,5.446c-0.145-0.086-0.338-0.086-0.483,0	L8.082,14.499c-0.152,0.086-0.249,0.255-0.249,0.428v18.114c0,0.173,0.094,0.338,0.244,0.42l4.299,2.483	c2.334,1.167,3.76-0.208,3.76-1.591V16.476c0-0.255,0.2-0.452,0.456-0.452h1.988c0.248,0,0.452,0.196,0.452,0.452v17.886	c0,3.112-1.697,4.9-4.648,4.9c-0.908,0-1.623,0-3.619-0.982l-4.118-2.373C5.629,35.317,5,34.216,5,33.042V14.928	c0-1.179,0.629-2.279,1.646-2.861L22.36,3.002c0.994-0.562,2.314-0.562,3.301,0l15.694,9.069C42.367,12.656,43,13.753,43,14.932	v18.114c0,1.175-0.633,2.271-1.646,2.861L25.66,44.971c-0.503,0.291-1.073,0.44-1.654,0.44"></path><path fill="#21a366" d="M28.856,32.937c-6.868,0-8.308-3.153-8.308-5.797c0-0.251,0.203-0.452,0.455-0.452h2.028	c0.224,0,0.413,0.163,0.448,0.384c0.306,2.066,1.218,3.108,5.371,3.108c3.308,0,4.715-0.747,4.715-2.502	c0-1.01-0.401-1.76-5.54-2.263c-4.299-0.424-6.955-1.371-6.955-4.809c0-3.167,2.672-5.053,7.147-5.053	c5.026,0,7.517,1.745,7.831,5.493c0.012,0.13-0.035,0.255-0.122,0.35c-0.086,0.09-0.208,0.145-0.334,0.145h-2.039	c-0.212,0-0.397-0.149-0.44-0.354c-0.491-2.173-1.678-2.868-4.904-2.868c-3.611,0-4.031,1.257-4.031,2.2	c0,1.143,0.495,1.477,5.367,2.122c4.825,0.64,7.116,1.544,7.116,4.935c0,3.418-2.853,5.379-7.827,5.379"></path></svg>
</div>

<div>
<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
width="144" height="144"
viewBox="0 0 48 48"
><path fill="#673ab7" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5 V37z"></path><path fill="#fff" d="M33.03,25.6c-0.65-0.9-1.59-1.52-2.8-1.85c0,0,1.02-0.37,1.94-1.75c0.55-0.88,0.83-1.94,0.83-3.18 c0-2.15-0.78-3.8-2.34-4.93C29.1,12.76,27.34,12,24.35,12H15v24h10.43c2.83-0.02,4.96-0.63,6.41-1.8c1.44-1.19,2.16-2.95,2.16-5.3 C34,27.6,33.68,26.5,33.03,25.6z M21,16c0,0,4.17,0,4.25,0c1.52,0,2.75,1.23,2.75,2.75c0,1.52-1.23,2.75-2.75,2.75 c-0.08,0-4.25,0-4.25,0V16z M26,32h-5v-6h5c1.66,0,3,1.34,3,3C29,30.66,27.66,32,26,32z"></path></svg>
</div>
                        </div>
                    </div>
                    <div>
                        <p>Tools</p>
                        <div id="toolsIcons">
                            <div>
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
width="144" height="144"
viewBox="0 0 48 48"
><path fill="#7e57c2" d="M7,41L7,7c0-2.209,1.791-4,4-4h26c2.209,0,4,1.785,4,3.994c0,8.018,0,25.991,0,34.01C41,43.214,39.209,45,37,45H11C8.791,45,7,43.209,7,41z"></path><path fill="#fff" d="M28.292,39.221v-16.68c0,0,1.085-3.991-13.364,1.633c-0.026,0.071-0.026-15.424-0.026-15.424l4.721-0.029v9.928c0,0,13.218-5.206,13.218,3.948v16.623L28.292,39.221L28.292,39.221L28.292,39.221z M30.982,14.73h-5.007c1.802-2.204,3.434-5.98,3.434-5.98h5.178C34.586,8.751,33.7,11.211,30.982,14.73L30.982,14.73L30.982,14.73z M14.987,39.192v-9.498l4.75,4.75L14.987,39.192L14.987,39.192z"></path></svg>
                            </div>
                            <div>
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
width="144" height="144"
viewBox="0 0 48 48"
><path fill="#33d375" d="M33,8c0-2.209-1.791-4-4-4s-4,1.791-4,4c0,1.254,0,9.741,0,11c0,2.209,1.791,4,4,4s4-1.791,4-4	C33,17.741,33,9.254,33,8z"></path><path fill="#33d375" d="M43,19c0,2.209-1.791,4-4,4c-1.195,0-4,0-4,0s0-2.986,0-4c0-2.209,1.791-4,4-4S43,16.791,43,19z"></path><path fill="#40c4ff" d="M8,14c-2.209,0-4,1.791-4,4s1.791,4,4,4c1.254,0,9.741,0,11,0c2.209,0,4-1.791,4-4s-1.791-4-4-4	C17.741,14,9.254,14,8,14z"></path><path fill="#40c4ff" d="M19,4c2.209,0,4,1.791,4,4c0,1.195,0,4,0,4s-2.986,0-4,0c-2.209,0-4-1.791-4-4S16.791,4,19,4z"></path><path fill="#e91e63" d="M14,39.006C14,41.212,15.791,43,18,43s4-1.788,4-3.994c0-1.252,0-9.727,0-10.984	c0-2.206-1.791-3.994-4-3.994s-4,1.788-4,3.994C14,29.279,14,37.754,14,39.006z"></path><path fill="#e91e63" d="M4,28.022c0-2.206,1.791-3.994,4-3.994c1.195,0,4,0,4,0s0,2.981,0,3.994c0,2.206-1.791,3.994-4,3.994	S4,30.228,4,28.022z"></path><path fill="#ffc107" d="M39,33c2.209,0,4-1.791,4-4s-1.791-4-4-4c-1.254,0-9.741,0-11,0c-2.209,0-4,1.791-4,4s1.791,4,4,4	C29.258,33,37.746,33,39,33z"></path><path fill="#ffc107" d="M28,43c-2.209,0-4-1.791-4-4c0-1.195,0-4,0-4s2.986,0,4,0c2.209,0,4,1.791,4,4S30.209,43,28,43z"></path></svg>
                            </div>
                            <div>
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
width="96" height="96"
viewBox="0 0 24 24"
>    <path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6 c0,0,1.4,0,2.8,1.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4 c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3 C22,6.1,16.9,1.4,10.9,2.1z"></path></svg>
                            </div>
                            <div>
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
width="144" height="144"
viewBox="0 0 48 48"
><path fill="#5d4037" d="M42,17.3C42,37.8,24,44,24,44S6,37.8,6,17.3c0-2.5,0.2-4.6,0.4-6.3c0.3-2.5,2-4.5,4.4-5.1 C13.9,5,18.8,4,24,4s10.1,1,13.3,1.9c2.4,0.6,4.1,2.7,4.4,5.1C41.8,12.7,42,14.9,42,17.3z"></path><path fill="#4caf50" d="M24,7c4.9,0,9.5,1,12.5,1.8c1.2,0.3,2,1.3,2.2,2.6c0.2,1.9,0.3,3.9,0.3,5.9c0,15.6-11.5,21.9-15,23.4 c-3.5-1.6-15-7.9-15-23.4c0-2,0.1-4,0.3-5.9c0.1-1.3,1-2.3,2.2-2.6C14.5,8,19.1,7,24,7 M24,4c-5.2,0-10.1,1-13.3,1.9 C8.4,6.5,6.6,8.6,6.4,11C6.2,12.7,6,14.9,6,17.3C6,37.8,24,44,24,44s18-6.2,18-26.7c0-2.5-0.2-4.6-0.4-6.3c-0.3-2.5-2-4.5-4.4-5.1 C34.1,5,29.2,4,24,4L24,4z"></path><path fill="#dcedc8" d="M23 28H25V36H23z"></path><path fill="#4caf50" d="M24,10c0,0-6,5-6,13c0,5.2,3.3,8.5,5,10l1-3l1,3c1.7-1.5,5-4.8,5-10C30,15,24,10,24,10z"></path><path fill="#81c784" d="M24,10c0,0-6,5-6,13c0,5.2,3.3,8.5,5,10l1-3V10z"></path></svg>
                            </div>
                            <div>
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
width="144" height="144"
viewBox="0 0 48 48"
><path fill="#1E88E5" d="M6,10c0-2.2,1.8-4,4-4h28c2.2,0,4,1.8,4,4v28c0,2.2-1.8,4-4,4H10c-2.2,0-4-1.8-4-4V10z"></path><path fill="#FFF" d="M10,12.2c0-1.2,1-2.2,2.2-2.2h7.6c1.2,0,2.2,1,2.2,2.2v21.6c0,1.2-1,2.2-2.2,2.2h-7.6C11,36,10,35,10,33.8V12.2z M26,22.8c0,1.2,1,2.2,2.2,2.2h7.6c1.2,0,2.2-1,2.2-2.2V12.2c0-1.2-1-2.2-2.2-2.2h-7.6C27,10,26,11,26,12.2V22.8z"></path></svg>
                            </div>
                            <div>
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
width="128" height="128"
viewBox="0 0 172 172"
><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" ><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#e67e22"><path d="M85.67981,8.0625c-11.33959,0.03666 -22.84736,2.56081 -33.73022,7.84729c-18.58138,9.02731 -32.81345,25.06845 -39.56714,44.59045c-14.09325,40.65112 7.43774,85.02675 48.09155,99.11731c40.65381,14.09056 85.02931,-7.44043 99.12256,-48.09155c6.837,-19.53813 5.5596,-41.00529 -3.54834,-59.59741c-13.51183,-27.80983 -41.38944,-43.95978 -70.36841,-43.86609zM84.74548,13.40076c8.27866,-0.14332 16.72301,1.14076 25.0011,4.01025c18.17019,6.2995 33.09778,19.55652 41.49353,36.85864c8.39844,17.30213 9.5722,37.23582 3.27539,55.40869c-13.11769,37.84 -54.42465,57.88392 -92.26734,44.76892c-37.84269,-13.115 -57.88392,-54.42465 -44.76892,-92.26733c10.24609,-29.5646 37.69958,-48.26731 67.26624,-48.77918zM85.02893,22.35559c-2.24406,-0.03225 -4.488,0.05808 -6.724,0.2677c-1.4835,0.04838 -2.64408,1.29067 -2.59302,2.77148c0.04838,1.4835 1.29067,2.64408 2.77148,2.59302c0.11019,-0.00268 0.22575,-0.01268 0.33594,-0.03149c2.021,-0.20962 4.04931,-0.31251 6.07837,-0.30445c1.47006,-0.20425 2.49282,-1.56131 2.28857,-3.02869c-0.15856,-1.1395 -1.02591,-2.05258 -2.15735,-2.26758zM67.32922,24.83838c-0.3469,-0.03809 -0.71013,-0.00642 -1.06555,0.09973c-18.91194,5.75394 -33.94472,20.17821 -40.46997,38.83753c-0.52675,1.38675 0.17221,2.9376 1.55896,3.46435c1.38675,0.52675 2.93761,-0.16696 3.46436,-1.55371c0.01881,-0.04569 0.0338,-0.09335 0.04724,-0.14172l-0.09448,0.09448c5.95281,-17.08712 19.72155,-30.30551 37.03711,-35.55689c1.42169,-0.42462 2.22504,-1.92194 1.80042,-3.34363c-0.31847,-1.06627 -1.23738,-1.78589 -2.27808,-1.90015zM120.76953,39.64063c-6.40162,0 -11.5846,5.18822 -11.5846,11.58984c0,6.40163 5.18566,11.59509 11.5846,11.59509c1.65012,0 3.2132,-0.35807 4.63489,-0.98157l-8.50342,-8.78686c-0.17738,-0.18275 -0.2732,-0.43231 -0.26245,-0.68762c0.00806,-0.25531 0.12413,-0.49731 0.31494,-0.66663l10.79724,-9.6687c-1.94575,-1.48081 -4.34745,-2.39355 -6.9812,-2.39355zM129.16797,43.28345l-10.2356,9.17004l8.18323,8.45618c3.15244,-2.07206 5.23853,-5.62376 5.23853,-9.6792c0,-3.08525 -1.2216,-5.86958 -3.18616,-7.94702zM128.95276,48.78442c0.36231,-0.0218 0.71899,0.16772 0.89233,0.5144c0.04837,0.09944 1.19606,2.46847 -0.34119,5.54297c-0.16394,0.33056 -0.49584,0.51965 -0.83984,0.51965c-0.13975,0 -0.28555,-0.03254 -0.41992,-0.09973c-0.46494,-0.23112 -0.65373,-0.79214 -0.41992,-1.25977c1.09919,-2.19569 0.3655,-3.80659 0.33594,-3.87378c-0.22038,-0.46494 -0.02658,-1.02352 0.43567,-1.24927c0.11556,-0.05577 0.23616,-0.08722 0.35693,-0.09448zM105.90955,58.20642c-1.72806,0.07458 -3.68914,0.49395 -5.80017,1.25452c-8.39844,3.02344 -18.47656,14.10938 -18.47656,14.10938l-8.08349,9.37476l6.63477,6.51929l30.12414,-30.43908c-1.17578,-0.62081 -2.67062,-0.89343 -4.39868,-0.81885zM111.8042,60.19055l-30.28162,30.59656l3.91052,3.84754l22.73877,-23.06421c0.06719,-0.0645 4.97125,-4.90423 4.72937,-9.20154c-0.22306,-0.85194 -0.58642,-1.58978 -1.09705,-2.17835zM112.26086,69.54431c-1.30613,1.91619 -2.65067,3.24919 -2.76623,3.35938l-22.72302,23.04321l3.01819,2.97095c0.30637,-0.2795 0.60171,-0.53922 0.90808,-0.8241c16.37494,-15.18438 19.82149,-21.66138 21.56299,-28.54944zM72.3158,84.3728l-7.47986,8.68189l13.7157,-2.55103zM79.87439,91.80017l-4.72412,4.89209l8.38794,-1.29126zM85.2074,97.04919l-12.21448,1.87915l-22.39233,23.17444l9.39575,9.23828l0.47241,0.0105l-2.35156,-9.74219c0,0 12.9553,-5.88457 30.28162,-21.43176zM139.05713,99.76294c-1.02986,0.18808 -1.89448,0.9712 -2.13635,2.05762c-0.30369,1.36256 0.48316,2.73285 1.81616,3.14941l5.18603,1.38574c1.44856,0.3225 2.88466,-0.58806 3.20716,-2.03662c0.30369,-1.36256 -0.48841,-2.73285 -1.82141,-3.14941l-5.18079,-1.38574c-0.36214,-0.08062 -0.72751,-0.08369 -1.0708,-0.02099zM134.49048,112.41309c-1.04309,-0.09171 -2.08873,0.43563 -2.60876,1.41724c-0.66112,1.247 -0.2433,2.7934 0.95532,3.53784l4.65064,2.677c1.29538,0.73906 2.94575,0.28756 3.68482,-1.00781c0.73906,-1.29538 0.28756,-2.94575 -1.00781,-3.68482l-4.65064,-2.63501c-0.32788,-0.17402 -0.67586,-0.27387 -1.02356,-0.30444zM125.86108,123.17358c-0.68699,0 -1.36949,0.26329 -1.8949,0.78735c-1.04812,1.04812 -1.04812,2.74692 0,3.79504l3.79504,3.80029c1.04813,1.04812 2.74692,1.04812 3.79505,0c1.04812,-1.04812 1.04812,-2.75217 0,-3.80029l-3.79505,-3.79504c-0.52406,-0.52406 -1.21315,-0.78735 -1.90015,-0.78735zM49.29358,123.45703l-7.30139,7.55859l15.27466,0.2782zM114.67542,131.51953c-0.34526,0.04376 -0.68275,0.15575 -1.00256,0.34119c-1.27656,0.74713 -1.71282,2.38982 -0.97107,3.66907l2.66125,4.62964c0.69606,1.3115 2.31826,1.80885 3.62708,1.11279c1.3115,-0.69606 1.80885,-2.31826 1.11279,-3.62707c-0.02956,-0.05375 -0.05698,-0.11166 -0.08923,-0.16272l-2.677,-4.65064c-0.56034,-0.95944 -1.62548,-1.44352 -2.66125,-1.31226zM102.76013,136.75806c-0.34522,-0.05052 -0.70152,-0.03565 -1.0603,0.05774c-0.00538,0.00269 -0.00781,0 -0.0105,0c-1.43244,0.38163 -2.28971,1.8587 -1.9054,3.29114c0.00269,0.00538 0.00256,0.00769 0.00525,0.01575l1.38574,5.18603c0.44344,1.41631 1.951,2.20186 3.36463,1.75842c1.333,-0.41656 2.1251,-1.7816 1.82141,-3.14417l-1.38574,-5.18603c-0.28017,-1.07634 -1.17943,-1.82733 -2.21509,-1.97888z"></path></g></g></svg>
                            </div>
                        </div>
                    </div>
                </div>
                {/*audio*/}
                <div id="audioDiv" className="d-block">
                        <div id="engDiv">
                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="black" id="engIcon" class="bi bi-play-circle" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z"/>
                            </svg>
                            <p id="engText">ENG</p>
                        </div>
                        <div id="spaDiv">
                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="black" id="spaIcon" class="bi bi-play-circle" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z"/>
                            </svg>
                            <p id="spaText">SPA</p>
                        </div>
                    </div>
            </div>
        )
    }
}

export default skills