import React from "react";
import NavBar from "./NavBar"
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Chat from "./Chat";
import ChatIngles from "./ChatIngles";



export default function Skills() {

  const english = useSelector ((state) => state.english);

    let tecs=[
        {name:"Javascript",src:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNDgiIGhlaWdodD0iNDgiCnZpZXdCb3g9IjAgMCA0OCA0OCIKc3R5bGU9ImZpbGw6IzAwMDAwMDsiPgo8cGF0aCBmaWxsPSIjZmZkNjAwIiBkPSJNNiw0MlY2aDM2djM2SDZ6Ij48L3BhdGg+PHBhdGggZmlsbD0iIzAwMDAwMSIgZD0iTTI5LjUzOCAzMi45NDdjLjY5MiAxLjEyNCAxLjQ0NCAyLjIwMSAzLjAzNyAyLjIwMSAxLjMzOCAwIDIuMDQtLjY2NSAyLjA0LTEuNTg1IDAtMS4xMDEtLjcyNi0xLjQ5Mi0yLjE5OC0yLjEzM2wtLjgwNy0uMzQ0Yy0yLjMyOS0uOTg4LTMuODc4LTIuMjI2LTMuODc4LTQuODQxIDAtMi40MSAxLjg0NS00LjI0NCA0LjcyOC00LjI0NCAyLjA1MyAwIDMuNTI4LjcxMSA0LjU5MiAyLjU3M2wtMi41MTQgMS42MDdjLS41NTMtLjk4OC0xLjE1MS0xLjM3Ny0yLjA3OC0xLjM3Ny0uOTQ2IDAtMS41NDUuNTk3LTEuNTQ1IDEuMzc3IDAgLjk2NC42IDEuMzU0IDEuOTg1IDEuOTUxbC44MDcuMzQ0QzM2LjQ1MiAyOS42NDUgMzggMzAuODM5IDM4IDMzLjUyMyAzOCAzNi40MTUgMzUuNzE2IDM4IDMyLjY1IDM4Yy0yLjk5OSAwLTQuNzAyLTEuNTA1LTUuNjUtMy4zNjhMMjkuNTM4IDMyLjk0N3pNMTcuOTUyIDMzLjAyOWMuNTA2LjkwNiAxLjI3NSAxLjYwMyAyLjM4MSAxLjYwMyAxLjA1OCAwIDEuNjY3LS40MTggMS42NjctMi4wNDNWMjJoMy4zMzN2MTEuMTAxYzAgMy4zNjctMS45NTMgNC44OTktNC44MDUgNC44OTktMi41NzcgMC00LjQzNy0xLjc0Ni01LjE5NS0zLjM2OEwxNy45NTIgMzMuMDI5eiI+PC9wYXRoPgo8L3N2Zz4="},
        {name:"Typescript",src:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNDgiIGhlaWdodD0iNDgiCnZpZXdCb3g9IjAgMCA0OCA0OCIKc3R5bGU9ImZpbGw6IzAwMDAwMDsiPgo8bGluZWFyR3JhZGllbnQgaWQ9Ik8yemlwWGx3elp5T3NlOF8zTDJ5eWFfd3BabUt6azExQXpKX2dyMSIgeDE9IjE1LjE4OSIgeDI9IjMyLjI3NiIgeTE9Ii0uMjA4IiB5Mj0iNDYuNzM3IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjMmFhNGY0Ij48L3N0b3A+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMDA3YWQ5Ij48L3N0b3A+PC9saW5lYXJHcmFkaWVudD48cmVjdCB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIHg9IjYiIHk9IjYiIGZpbGw9InVybCgjTzJ6aXBYbHd6WnlPc2U4XzNMMnl5YV93cFptS3prMTFBekpfZ3IxKSI+PC9yZWN0Pjxwb2x5Z29uIGZpbGw9IiNmZmYiIHBvaW50cz0iMjcuNDksMjIgMTQuMjI3LDIyIDE0LjIyNywyNS4yNjQgMTguOTg0LDI1LjI2NCAxOC45ODQsNDAgMjIuNzUzLDQwIDIyLjc1MywyNS4yNjQgMjcuNDksMjUuMjY0Ij48L3BvbHlnb24+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTM5LjE5NCwyNi4wODRjMCwwLTEuNzg3LTEuMTkyLTMuODA3LTEuMTkycy0yLjc0NywwLjk2LTIuNzQ3LDEuOTg2CWMwLDIuNjQ4LDcuMzgxLDIuMzgzLDcuMzgxLDcuNzEyYzAsOC4yMDktMTEuMjU0LDQuNTY4LTExLjI1NCw0LjU2OFYzNS4yMmMwLDAsMi4xNTIsMS42MjIsNC43MzMsMS42MjJzMi40ODMtMS42ODgsMi40ODMtMS45MgljMC0yLjQ0OS03LjMxNS0yLjQ0OS03LjMxNS03Ljg3OGMwLTcuMzgxLDEwLjY1OC00LjQ2OSwxMC42NTgtNC40NjlMMzkuMTk0LDI2LjA4NHoiPjwvcGF0aD4KPC9zdmc+"},
        {name:"React", src:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNDgiIGhlaWdodD0iNDgiCnZpZXdCb3g9IjAgMCA0OCA0OCIKc3R5bGU9ImZpbGw6IzAwMDAwMDsiPgo8cGF0aCBmaWxsPSIjODBkZWVhIiBkPSJNMjQsMzRDMTEuMSwzNCwxLDI5LjYsMSwyNGMwLTUuNiwxMC4xLTEwLDIzLTEwYzEyLjksMCwyMyw0LjQsMjMsMTBDNDcsMjkuNiwzNi45LDM0LDI0LDM0eiBNMjQsMTYJYy0xMi42LDAtMjEsNC4xLTIxLDhjMCwzLjksOC40LDgsMjEsOHMyMS00LjEsMjEtOEM0NSwyMC4xLDM2LjYsMTYsMjQsMTZ6Ij48L3BhdGg+PHBhdGggZmlsbD0iIzgwZGVlYSIgZD0iTTE1LjEsNDQuNmMtMSwwLTEuOC0wLjItMi42LTAuN0M3LjYsNDEuMSw4LjksMzAuMiwxNS4zLDE5bDAsMGMzLTUuMiw2LjctOS42LDEwLjMtMTIuNGMzLjktMyw3LjQtMy45LDkuOC0yLjUJYzIuNSwxLjQsMy40LDQuOSwyLjgsOS44Yy0wLjYsNC42LTIuNiwxMC01LjYsMTUuMmMtMyw1LjItNi43LDkuNi0xMC4zLDEyLjRDMTkuNyw0My41LDE3LjIsNDQuNiwxNS4xLDQ0LjZ6IE0zMi45LDUuNAljLTEuNiwwLTMuNywwLjktNiwyLjdjLTMuNCwyLjctNi45LDYuOS05LjgsMTEuOWwwLDBjLTYuMywxMC45LTYuOSwyMC4zLTMuNiwyMi4yYzEuNywxLDQuNSwwLjEsNy42LTIuM2MzLjQtMi43LDYuOS02LjksOS44LTExLjkJYzIuOS01LDQuOC0xMC4xLDUuNC0xNC40YzAuNS00LTAuMS02LjgtMS44LTcuOEMzNCw1LjYsMzMuNSw1LjQsMzIuOSw1LjR6Ij48L3BhdGg+PHBhdGggZmlsbD0iIzgwZGVlYSIgZD0iTTMzLDQ0LjZjLTUsMC0xMi4yLTYuMS0xNy42LTE1LjZDOC45LDE3LjgsNy42LDYuOSwxMi41LDQuMWwwLDBDMTcuNCwxLjMsMjYuMiw3LjgsMzIuNywxOQljMyw1LjIsNSwxMC42LDUuNiwxNS4yYzAuNyw0LjktMC4zLDguMy0yLjgsOS44QzM0LjcsNDQuNCwzMy45LDQ0LjYsMzMsNDQuNnogTTEzLjUsNS44Yy0zLjMsMS45LTIuNywxMS4zLDMuNiwyMi4yCWM2LjMsMTAuOSwxNC4xLDE2LjEsMTcuNCwxNC4yYzEuNy0xLDIuMy0zLjgsMS44LTcuOGMtMC42LTQuMy0yLjUtOS40LTUuNC0xNC40QzI0LjYsOS4xLDE2LjgsMy45LDEzLjUsNS44TDEzLjUsNS44eiI+PC9wYXRoPjxjaXJjbGUgY3g9IjI0IiBjeT0iMjQiIHI9IjQiIGZpbGw9IiM4MGRlZWEiPjwvY2lyY2xlPgo8L3N2Zz4="},
        {name:"Redux",src:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNDgiIGhlaWdodD0iNDgiCnZpZXdCb3g9IjAgMCA0OCA0OCIKc3R5bGU9ImZpbGw6IzAwMDAwMDsiPgo8cGF0aCBmaWxsPSIjN2U1N2MyIiBkPSJNMjMsNGMtNi42MTcsMC0xMiw3LjI3LTEyLDE2LjIwNWMwLDQuODM0LDEuNTgyLDkuMTY5LDQuMDc4LDEyLjEzNkMxNS4wMywzMi41NTQsMTUsMzIuNzczLDE1LDMzCWMwLDEuNjU3LDEuMzQzLDMsMywzczMtMS4zNDMsMy0zcy0xLjM0My0zLTMtM2MtMC4zMTUsMC0wLjYxMiwwLjA2Mi0wLjg5NywwLjE1MkMxNS4yMDYsMjcuNzMxLDE0LDI0LjE3NSwxNCwyMC4yMDUJQzE0LDEyLjkyNCwxOC4wMzcsNywyMyw3YzMuODM3LDAsNy4xMTEsMy41NDcsOC40MDQsOC41MThjMS4xMjIsMC4zNDYsMi4yMzcsMC43ODIsMy4zMywxLjMwOEMzMy41NzksOS41MDgsMjguNzU5LDQsMjMsNHoiPjwvcGF0aD48cGF0aCBmaWxsPSIjN2U1N2MyIiBkPSJNMzUuNTA3LDIwLjA4NGMtMy45NDctMi4zOTItOC4zNzQtMy40NDItMTIuMTgyLTIuOTU5QzIyLjc3NSwxNi40NDQsMjEuOTQzLDE2LDIxLDE2CWMtMS42NTcsMC0zLDEuMzQzLTMsM3MxLjM0MywzLDMsM2MxLjI3MiwwLDIuMzUzLTAuNzk1LDIuNzg5LTEuOTEyYzMuMTE4LTAuMzc5LDYuODEyLDAuNTMxLDEwLjE2MywyLjU2MwljNi40MDMsMy44ODEsOS42NywxMC41NjksNy4yODIsMTQuOTExYy0wLjgyNywxLjUwNC0yLjI4NiwyLjU3Mi00LjIxOCwzLjA5Yy0yLjI4NiwwLjYxMS01LjAwNywwLjM5NC03LjcyNy0wLjUyOAljLTAuODM5LDAuNzcyLTEuNzQ5LDEuNDk4LTIuNzI1LDIuMTY4YzIuNTUyLDEuMTE3LDUuMTk2LDEuNzA0LDcuNjY5LDEuNzA0YzEuMjQsMCwyLjQzOC0wLjE0NywzLjU1OS0wLjQ0NwljMi43NDEtMC43MzMsNC44NDEtMi4zMDQsNi4wNzEtNC41NDJDNDcuMDE2LDMzLjI3Niw0My4yNjcsMjQuNzg3LDM1LjUwNywyMC4wODR6Ij48L3BhdGg+PHBhdGggZmlsbD0iIzdlNTdjMiIgZD0iTTM1LDI4Ljk5MkMzNSwyNy4zNCwzMy42NTcsMjYsMzIsMjZzLTMsMS4zNC0zLDIuOTkyYzAsMC42NjksMC4yMjgsMS4yODEsMC42LDEuNzc5CWMtMS4yNzksMi44MDItMy43NDQsNS41NjctNy4wNjIsNy41NzhjLTMuODY1LDIuMzQ0LTguMTg1LDMuMjAyLTExLjU1NSwyLjMwMmMtMS45MzItMC41MTgtMy4zOTEtMS41ODYtNC4yMTgtMy4wOQljLTEuNzAyLTMuMDk0LTAuNTIxLTcuMzc2LDIuNjEtMTAuOTg4Yy0wLjMyMy0xLjE0NC0wLjU2Mi0yLjM0LTAuNzA2LTMuNTc1Yy01LjA3LDQuNzk3LTcuMTA5LDExLjMyMy00LjUzMiwxNi4wMDkJYzEuMjMsMi4yMzgsMy4zMywzLjgwOSw2LjA3MSw0LjU0MmMxLjEyMSwwLjMsMi4zMTgsMC40NDcsMy41NTksMC40NDdjMy4zNDYsMCw3LjAwNy0xLjA2OCwxMC4zMjYtMy4wOAljMy44MzYtMi4zMjUsNi42ODMtNS41NzcsOC4yMDktOC45NjJDMzMuODE1LDMxLjgwMSwzNSwzMC41NDEsMzUsMjguOTkyeiI+PC9wYXRoPgo8L3N2Zz4="},
        {name: "MaterialUI", src:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNDgiIGhlaWdodD0iNDgiCnZpZXdCb3g9IjAgMCA0OCA0OCIKc3R5bGU9ImZpbGw6IzAwMDAwMDsiPgo8cG9seWdvbiBmaWxsPSIjMjliNmY2IiBwb2ludHM9IjEsNSA3LDkgNywyOSAxLDI1Ij48L3BvbHlnb24+PHBvbHlnb24gZmlsbD0iIzAyODhkMSIgcG9pbnRzPSI0NywyMCA0MSwyNCA0MSwzNyA0NywzMyI+PC9wb2x5Z29uPjxwb2x5Z29uIGZpbGw9IiMwMjg4ZDEiIHBvaW50cz0iNDcsNiA0MSwxMCA0MSwxNyA0NywxMyI+PC9wb2x5Z29uPjxwb2x5Z29uIGZpbGw9IiMwMjg4ZDEiIHBvaW50cz0iMzUsNSAyOSw5IDI5LDI5IDM1LDI1Ij48L3BvbHlnb24+PHBvbHlnb24gZmlsbD0iIzI5YjZmNiIgcG9pbnRzPSIxLDEyIDE4LDIzIDE4LDE2IDEsNSI+PC9wb2x5Z29uPjxwb2x5Z29uIGZpbGw9IiMwMjg4ZDEiIHBvaW50cz0iMzUsMTIgMTgsMjMgMTgsMTYgMzUsNSI+PC9wb2x5Z29uPjxwb2x5Z29uIGZpbGw9IiMwMjg4ZDEiIHBvaW50cz0iMzUsMjYgMTgsMzcgMTgsMzAgMzUsMTkiPjwvcG9seWdvbj48cG9seWdvbiBmaWxsPSIjMDI4OGQxIiBwb2ludHM9IjQ3LDM0IDMwLDQ1IDMwLDM4IDQ3LDI3Ij48L3BvbHlnb24+PHBvbHlnb24gZmlsbD0iIzI5YjZmNiIgcG9pbnRzPSIzMCwzNy43NjUgMTgsMzAgMTgsMzcgMzAsNDQuNzY1Ij48L3BvbHlnb24+Cjwvc3ZnPg=="},
        {name:"Tailwind", src:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNDgiIGhlaWdodD0iNDgiCnZpZXdCb3g9IjAgMCA0OCA0OCIKc3R5bGU9ImZpbGw6IzAwMDAwMDsiPgo8bGluZWFyR3JhZGllbnQgaWQ9ImlPbVFmam9DQzRIdzZ6VndSalNEaGFfeDdYTU5HaDJ2ZHFBX2dyMSIgeDE9IjIxLjg2MSIgeDI9IjI1LjcwMyIgeTE9IjguMjM3IiB5Mj0iMzYuNTUyIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjMDBjMWUwIj48L3N0b3A+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMDA5YmI4Ij48L3N0b3A+PC9saW5lYXJHcmFkaWVudD48cGF0aCBmaWxsPSJ1cmwoI2lPbVFmam9DQzRIdzZ6VndSalNEaGFfeDdYTU5HaDJ2ZHFBX2dyMSkiIGQ9Ik0yNCw5LjYwNGMtNS41ODksMC05LjM0NywyLjQzOS0xMS4yNzYsNy4zMThjLTAuMiwwLjUwNSwwLjQxNywwLjkyLDAuODE2LDAuNTUxIGMyLjAzNS0xLjg4Miw0LjMyMi0yLjUwNSw2Ljg2LTEuODcxYzEuODI2LDAuNDU2LDMuMTMxLDEuNzgxLDQuNTc2LDMuMjQ3QzI3LjMyOCwyMS4yMzYsMzAuMDUxLDI0LDM2LDI0IGM1LjU4OSwwLDkuMzQ4LTIuNDQsMTEuMjc2LTcuMzE5YzAuMi0wLjUwNS0wLjQxNy0wLjkyLTAuODE2LTAuNTUxYy0yLjAzNSwxLjg4Mi00LjMyMiwyLjUwNi02Ljg2LDEuODcyIGMtMS44MjUtMC40NTYtMy4xMy0xLjc4MS00LjU3NS0zLjI0N0MzMi42NzIsMTIuMzY3LDI5Ljk0OCw5LjYwNCwyNCw5LjYwNEwyNCw5LjYwNHogTTEyLDI0Yy01LjU4OSwwLTkuMzQ4LDIuNDQtMTEuMjc2LDcuMzE5IGMtMC4yLDAuNTA1LDAuNDE3LDAuOTIsMC44MTYsMC41NTFjMi4wMzUtMS44ODIsNC4zMjItMi41MDYsNi44Ni0xLjg3MWMxLjgyNSwwLjQ1NywzLjEzLDEuNzgxLDQuNTc1LDMuMjQ2IGMyLjM1MywyLjM4OCw1LjA3Nyw1LjE1MiwxMS4wMjUsNS4xNTJjNS41ODksMCw5LjM0OC0yLjQ0LDExLjI3Ni03LjMxOWMwLjItMC41MDUtMC40MTctMC45Mi0wLjgxNi0wLjU1MSBjLTIuMDM1LDEuODgyLTQuMzIyLDIuNTA2LTYuODYsMS44NzFjLTEuODI2LTAuNDU2LTMuMTMxLTEuNzgxLTQuNTc2LTMuMjQ2QzIwLjY3MiwyNi43NjQsMTcuOTQ5LDI0LDEyLDI0TDEyLDI0eiI+PC9wYXRoPgo8L3N2Zz4="},
        {name:"Node.js", src:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNDgiIGhlaWdodD0iNDgiCnZpZXdCb3g9IjAgMCA0OCA0OCIKc3R5bGU9ImZpbGw6IzAwMDAwMDsiPgo8cGF0aCBmaWxsPSIjMjFhMzY2IiBkPSJNMjQuMDA3LDQ1LjQxOWMtMC41NzQsMC0xLjE0My0wLjE1LTEuNjQ2LTAuNDRsLTUuMjQtMy4xMDNjLTAuNzgzLTAuNDM4LTAuNDAxLTAuNTkzLTAuMTQzLTAuNjgyCWMxLjA0NC0wLjM2NSwxLjI1NS0wLjQ0OCwyLjM2OS0xLjA4MWMwLjExNy0wLjA2NywwLjI3LTAuMDQzLDAuMzksMC4wMjhsNC4wMjYsMi4zODljMC4xNDUsMC4wNzksMC4zNTIsMC4wNzksMC40ODYsMGwxNS42OTctOS4wNjEJYzAuMTQ1LTAuMDgzLDAuMjQtMC4yNTEsMC4yNC0wLjQyNFYxNC45MzJjMC0wLjE4MS0wLjA5NC0wLjM0Mi0wLjI0My0wLjQzMkwyNC4yNTMsNS40NDZjLTAuMTQ1LTAuMDg2LTAuMzM4LTAuMDg2LTAuNDgzLDAJTDguMDgyLDE0LjQ5OWMtMC4xNTIsMC4wODYtMC4yNDksMC4yNTUtMC4yNDksMC40Mjh2MTguMTE0YzAsMC4xNzMsMC4wOTQsMC4zMzgsMC4yNDQsMC40Mmw0LjI5OSwyLjQ4MwljMi4zMzQsMS4xNjcsMy43Ni0wLjIwOCwzLjc2LTEuNTkxVjE2LjQ3NmMwLTAuMjU1LDAuMi0wLjQ1MiwwLjQ1Ni0wLjQ1MmgxLjk4OGMwLjI0OCwwLDAuNDUyLDAuMTk2LDAuNDUyLDAuNDUydjE3Ljg4NgljMCwzLjExMi0xLjY5Nyw0LjktNC42NDgsNC45Yy0wLjkwOCwwLTEuNjIzLDAtMy42MTktMC45ODJsLTQuMTE4LTIuMzczQzUuNjI5LDM1LjMxNyw1LDM0LjIxNiw1LDMzLjA0MlYxNC45MjgJYzAtMS4xNzksMC42MjktMi4yNzksMS42NDYtMi44NjFMMjIuMzYsMy4wMDJjMC45OTQtMC41NjIsMi4zMTQtMC41NjIsMy4zMDEsMGwxNS42OTQsOS4wNjlDNDIuMzY3LDEyLjY1Niw0MywxMy43NTMsNDMsMTQuOTMyCXYxOC4xMTRjMCwxLjE3NS0wLjYzMywyLjI3MS0xLjY0NiwyLjg2MUwyNS42Niw0NC45NzFjLTAuNTAzLDAuMjkxLTEuMDczLDAuNDQtMS42NTQsMC40NCI+PC9wYXRoPjxwYXRoIGZpbGw9IiMyMWEzNjYiIGQ9Ik0yOC44NTYsMzIuOTM3Yy02Ljg2OCwwLTguMzA4LTMuMTUzLTguMzA4LTUuNzk3YzAtMC4yNTEsMC4yMDMtMC40NTIsMC40NTUtMC40NTJoMi4wMjgJYzAuMjI0LDAsMC40MTMsMC4xNjMsMC40NDgsMC4zODRjMC4zMDYsMi4wNjYsMS4yMTgsMy4xMDgsNS4zNzEsMy4xMDhjMy4zMDgsMCw0LjcxNS0wLjc0Nyw0LjcxNS0yLjUwMgljMC0xLjAxLTAuNDAxLTEuNzYtNS41NC0yLjI2M2MtNC4yOTktMC40MjQtNi45NTUtMS4zNzEtNi45NTUtNC44MDljMC0zLjE2NywyLjY3Mi01LjA1Myw3LjE0Ny01LjA1MwljNS4wMjYsMCw3LjUxNywxLjc0NSw3LjgzMSw1LjQ5M2MwLjAxMiwwLjEzLTAuMDM1LDAuMjU1LTAuMTIyLDAuMzVjLTAuMDg2LDAuMDktMC4yMDgsMC4xNDUtMC4zMzQsMC4xNDVoLTIuMDM5CWMtMC4yMTIsMC0wLjM5Ny0wLjE0OS0wLjQ0LTAuMzU0Yy0wLjQ5MS0yLjE3My0xLjY3OC0yLjg2OC00LjkwNC0yLjg2OGMtMy42MTEsMC00LjAzMSwxLjI1Ny00LjAzMSwyLjIJYzAsMS4xNDMsMC40OTUsMS40NzcsNS4zNjcsMi4xMjJjNC44MjUsMC42NCw3LjExNiwxLjU0NCw3LjExNiw0LjkzNWMwLDMuNDE4LTIuODUzLDUuMzc5LTcuODI3LDUuMzc5Ij48L3BhdGg+Cjwvc3ZnPg=="},
        {name:"Express", src:"https://www.vectorlogo.zone/logos/expressjs/expressjs-ar21.svg"},
        {name:"Sequelize", src:"https://www.vectorlogo.zone/logos/sequelizejs/sequelizejs-icon.svg"},
        {name:"PostgreSQL", src:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNDgiIGhlaWdodD0iNDgiCnZpZXdCb3g9IjAgMCA0OCA0OCIKc3R5bGU9ImZpbGw6IzAwMDAwMDsiPgo8cGF0aCBmaWxsPSIjZmZmIiBkPSJNNDQuMDgzLDI5Ljc5Yy0wLjE4My0wLjgyOS0wLjkzNS0xLjc5Ni0yLjQ1Mi0xLjc5NmMtMC4zMSwwLTAuNjQ5LDAuMDM5LTEuMDM1LDAuMTE5Yy0wLjcwOCwwLjE0Ni0xLjMxMSwwLjIxNy0xLjg0MiwwLjI0MWM0LjEzMy03LjA0LDYuODE2LTE2LjgxOSw0LjE1OS0yMC4yMTRjLTMuNTAxLTQuNDczLTguMjE0LTUuMTQxLTEwLjcxMS01LjE0MUwzMS45NjcsM2MtMC45MjksMC4wMTUtMS44OTMsMC4xMjktMi44NjMsMC4zMzlsLTMuNTgzLDAuNzc0QzI1LjAzMyw0LjA1MiwyNC41MzYsNC4wMDksMjQuMDE4LDRsLTAuMDMsMGwtMC4wMTYsMGwtMC4xNTItMC4wMDFjLTEuNTkzLDAtMy4wNDYsMC4zMzgtNC4zNDEsMC45NzNsLTEuMjUxLTAuNDkzYy0xLjcyLTAuNjc4LTQuMzA4LTEuNDg1LTYuODY4LTEuNDg1Yy0wLjE0NCwwLTAuMjg3LDAuMDAzLTAuNDMxLDAuMDA4QzguNDA3LDMuMDkzLDYuMjQxLDQuMDUsNC42NjQsNS43NjlDMi42OTYsNy45MTUsMS44LDExLjA1NCwyLjAwMywxNS4xQzIuMDEzLDE1LjMwOSw0LjQ2MSwzNiwxMS40LDM2aDAuMDI1bDAuMDY0LTAuMDAxYzAuOTAxLTAuMDIyLDEuNzYtMC4zODQsMi41NjMtMS4wNzdjMC42MTMsMC40NiwxLjQwNiwwLjczMiwyLjE0NSwwLjg0YzAuNDg4LDAuMTE1LDEuMzY2LDAuMjc4LDIuNDE4LDAuMjc4YzEuMjg0LDAsMi40NDItMC4yNjMsMy40NC0wLjczOGMtMC4wMDEsMC44OC0wLjAwNiwxLjk5NC0wLjAxNiwzLjQxOGwtMC4wMDEsMC4wNzVsMC4wMDUsMC4wNzVjMC4wOTcsMS40MTksMC4zNDIsMi42OTgsMC43MTEsMy43MDFjMS4wNTEsMi44NTksMi44NjYsNC40MzQsNS4xMTEsNC40MzRjMC4wOTMsMCwwLjE4OC0wLjAwMywwLjI4NC0wLjAwOWMxLjg0Ni0wLjExNCwzLjcxNy0xLjE1MSw1LjAwNC0yLjc3MmMxLjM5My0xLjc1NSwxLjcxNS0zLjYwNywxLjgzOS01LjAyNkwzNSwzOS4xMTF2LTAuMDg4di00LjA3OWwwLjEwMywwLjAxbDAuNDM2LDAuMDM4bDAuMDQyLDAuMDA0bDAuMDQyLDAuMDAyYzAuMTI0LDAuMDA2LDAuMjUyLDAuMDA4LDAuMzgxLDAuMDA4YzEuNTA3LDAsMy4zNjItMC4zOTEsNC42MTYtMC45NzRDNDEuODE5LDMzLjQ3Niw0NC41NTksMzEuOTQ4LDQ0LjA4MywyOS43OXoiPjwvcGF0aD48cGF0aCBmaWxsPSIjMDI3N2JkIiBkPSJNMzMsMzRjMC0wLjIwNSwwLjAxMi0wLjM3NiwwLjAxOC0wLjU2NUMzMy4wMDgsMzMuMTg0LDMzLDMzLDMzLDMzczAuMDEyLTAuMDA5LDAuMDMyLTAuMDIyYzAuMTQ5LTIuNjczLDAuODg2LTMuNzAzLDEuNjc1LTQuMjljLTAuMTEtMC4xNTMtMC4yMzctMC4zMTgtMC4zNTYtMC40NzVjLTAuMzMzLTAuNDM3LTAuNzQ4LTAuOTc5LTEuMTkyLTEuNjc0bC0wLjA4Mi0wLjE1OGMtMC4wNjctMC4xNjQtMC4yMjktMC40NDctMC40MzUtMC44MTljLTEuMTgzLTIuMTQtMy42NDUtNi41OTItMS45Ni05LjQwNGMwLjczOC0xLjIzMiwyLjEyMi0xLjk0Miw0LjEyMS0yLjExN0MzMy45ODYsMTEuNzE4LDMwLjkyNSw2LjExNSwyMy45ODUsNmMtMC4wMDIsMC0wLjAwNCwwLTAuMDA2LDBjLTYuMDQxLTAuMDk4LTguMDI2LDUuMzkyLTguNjcyLDguNjcyYzAuODktMC4zNzcsMS45MDYtMC42MDYsMi44MzYtMC42MDZjMC4wMTQsMCwwLjAyOSwwLDAuMDQzLDBjMi4yOSwwLjAxNywzLjg2NSwxLjIzOSw0LjMyMywzLjM1NGMwLjMzNSwxLjU1MiwwLjQ5NiwyLjkxLDAuNDkyLDQuMTUzYy0wLjAxLDIuNzE5LTAuNTU4LDQuMTQ5LTEuMDQyLDUuNDExbC0wLjE1NCwwLjQwOGMtMC4xMjQsMC4zMzQtMC4yNTUsMC42NDUtMC4zNzksMC45MzdjLTAuMTI2LDAuMjk4LTAuMjM3LDAuNTYzLTAuMzE4LDAuODAyYzAuNDg0LDAuMTEsMC44NjQsMC4yNjUsMS4xMjUsMC4zOGwwLjE1MSwwLjA2NmMwLjA0NywwLjAyLDAuMDk0LDAuMDQzLDAuMTM3LDAuMDY5YzAuODQ4LDAuNTE2LDEuMzc2LDEuMzA5LDEuNDg5LDIuMjMzYzAuMDYxLDAuNDk4LDAuMDUxLDMuODkzLDAuMDMsNi44NTVjMC4wODcsMS4yODUsMC4zMDUsMi4zNjQsMC41OTMsMy4xNDZjMC40MDksMS4xMTQsMS40MzEsMy4yNDEsMy4zOTQsMy4xMTljMS4zNy0wLjA4NSwyLjY4Ny0wLjkxOSwzLjU2MS0yLjAxOWMwLjkzOC0xLjE4MSwxLjI4NC0yLjQ4NywxLjQxNC0zLjk1OFYzNHoiPjwvcGF0aD48cGF0aCBmaWxsPSIjMDI3N2JkIiBkPSJNMTUuMTE0IDI4LjkxN2MtMS42MTMtMS42ODMtMi4zOTktMy45NDctMi4xMDQtNi4wNTYuMjg1LTIuMDM1LjEyNC00LjAyNy4wMzctNS4wOTgtLjAyOS0uMzU3LS4wNDgtLjYyMy0uMDQ3LS43NyAwLS4wMDguMDAyLS4wMTUuMDAzLS4wMjMgMC0uMDA0LS4wMDItLjAwNy0uMDAyLS4wMTEuMTIxLTMuMDIxIDEuMjg2LTcuNzg3IDQuNDkzLTEwLjYyQzE1LjkzMiA1LjcyNCAxMy4zODggNC45MTMgMTEgNSA3LjI1OCA1LjEzNiAzLjYzNiA3LjcyNCA0IDE1Yy4xMzcgMi43MyAzLjIyMiAxOS4xMDMgNy40NCAxOSAuNjAzLS4wMTUgMS4yMjktLjQwMiAxLjg3Mi0xLjE3NiAxLjAxNy0xLjIyMyAyLjAwNS0yLjMzMiAyLjcwOC0zLjEwNEMxNS43MDUgMjkuNDgxIDE1LjQwMSAyOS4yMTcgMTUuMTE0IDI4LjkxN3pNMzcuMDIzIDE0LjczMWMuMDE1LjE1NC4wMDIuMjg2LS4wMjIuNDA4LjAzMS45Mi0uMDY4IDEuODEzLS4xNjkgMi42NzctLjA3NC42MzYtLjE1IDEuMjkzLS4xNzEgMS45NTItLjAyMS42NDUuMDcgMS4yODIuMTY2IDEuOTU2LjIyNSAxLjU3OC40NTkgMy4zNTktLjc2NSA1LjQzNy4yMjUuMjk2LjQyMy41NzEuNTgxLjgzNyA0LjYxLTcuNDc1IDYuNDY4LTE2LjM2MSA0LjY5NS0xOC42MjZDMzguNjU1IDUuOTQ0IDM0Ljk0MSA0Ljk1MiAzMS45OTkgNWMtLjkyMS4wMTUtMS43NTguMTM5LTIuNDczLjI5NEMzNC42MDIgNy43NTQgMzYuODYzIDEzLjAyNiAzNy4wMjMgMTQuNzMxek00MSAzMC4wNzFjLTIuNjY1LjU1LTMuOTQ3LjI1Ny00LjU2OS0uMTI2LS4xLjA3Mi0uMi4xMzMtLjI5My4xOS0uMzcyLjIyNS0uOTYxLjU4My0xLjEwNSAyLjc4Mi4wODMuMDE2LjE1Ni4wMjUuMjQ2LjA0NEwzNS43MTQgMzNjMS4zMi4wNiAzLjA0OS0uMzEgNC4wNjMtLjc4MUM0MS45NjIgMzEuMjA1IDQzLjE1MyAyOS42MjcgNDEgMzAuMDcxek0yMi4wMjMgMzIuMTE5Yy0uMDM3LS4yOTgtLjE5OC0uNTM5LS40OTItLjczMmwtLjEwOC0uMDQ3QzIxLjA2MiAzMS4xODEgMjAuNjUzIDMxIDIwIDMxaC0uMDA0Yy0uMTI3LjAxLS4yNTMuMDE5LS4zOC4wMTktLjA1MiAwLS4xMDMtLjAwNy0uMTU1LS4wMDktLjQ3NC4zNjUtMS4xNDguNjQ3LTIuODE2Ljk5LTIuOTguNzU5LTEuMjIxIDEuNjU1LS4wNzggMS43OTQgMS4xMDYuMjc3IDMuNzM1LjYxNCA1LjQ4MS0uODA5QzIyLjA0MyAzMi41MzcgMjIuMDM1IDMyLjIyOSAyMi4wMjMgMzIuMTE5eiI+PC9wYXRoPjxwYXRoIGZpbGw9IiMwMjc3YmQiIGQ9Ik0yMC42ODEgMTguNTAxYy0uMjkyLjMwMi0uNzUzLjU2Ni0xLjI2Mi40ODQtLjgyOC0uMTM0LTEuNDYzLTEuMTMzLTEuNDE3LTEuNTA4aDBjLjA0NC0uMzc0Ljc1MS0uNTY5IDEuNTc4LS40MzUuMjg3LjA0Ny41NDguMTI4Ljc2OC4yMjgtLjMyLS42ODgtLjg5OS0xLjA4NS0xLjc4Mi0xLjE4Mi0xLjU2NS0uMTc0LTMuMjI2LjY0NC0zLjU2IDEuMDk3LjAwNy4xMS4wMi4yNTEuMDMzLjQxNy4wOTMgMS4xNDcuMjY1IDMuMjg0LS4wNSA1LjUzNy0uMjA4IDEuNDg1LjM5MyAzLjE2OSAxLjU2NyA0LjM5NS43NTcuNzkgMS42NDEgMS4yOSAyLjUxMyAxLjQzOC4xMTEtLjQ3OC4zMDktLjk0NC41MTMtMS40MjUuMTEzLS4yNjUuMjMzLS41NDcuMzQ2LS44NTJsLjE2Mi0uNDI3Yy40NDMtMS4xNTUuOS0yLjM1LjkwOS00LjcwM0MyMS4wMDMgMjAuNjYgMjAuODkyIDE5LjYyNyAyMC42ODEgMTguNTAxek0zNC44NDcgMjIuMDA3Yy0uMTA0LS43MjktLjIxMS0xLjQ4NC0uMTg1LTIuMzAzLjAyMy0uNzQyLjEwNS0xLjQ0Mi4xODQtMi4xMTkuMDYyLS41MzMuMTEtMS4wNDUuMTM4LTEuNTUtMS4yODkuMTA3LTIuMTQ1LjQ3OS0yLjU1MSAxLjEwOC4xNjgtLjA1Ny4zNTgtLjEwMi41NjgtLjEyOS44OTItLjExNiAxLjU0My4xNDEgMS42MTguNjM3LjA1NS4zNjMtLjI1My43MDUtLjM4OC44MzYtLjI3Ny4yNjktLjYyNi40NDItLjk4MS40ODgtLjA2NC4wMDgtLjEyOS4wMTItLjE5Mi4wMTItLjM1MyAwLS42OS0uMTIxLS45NDktLjMuMTEyIDEuOTczIDEuNTY3IDQuNjEyIDIuMjgzIDUuOTA3LjE1My4yNzcuMjcxLjQ5OC4zNjkuNjg4QzM1LjE1NCAyNC4xNjMgMzUuMDA5IDIzLjE0MyAzNC44NDcgMjIuMDA3eiI+PC9wYXRoPgo8L3N2Zz4="},
        {name:"MySQL", src:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNDgiIGhlaWdodD0iNDgiCnZpZXdCb3g9IjAgMCA0OCA0OCIKc3R5bGU9ImZpbGw6IzAwMDAwMDsiPgo8bGluZWFyR3JhZGllbnQgaWQ9ImVETWdNaXhlRDZNNkVZU1lCdUo4eWFfOW5MYVI1S0ZHak4wX2dyMSIgeDE9IjkuOCIgeDI9IjExLjA4MSIgeTE9IjI1LjIzNiIgeTI9IjM2Ljg5OSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iIzA1OGY5MiI+PC9zdG9wPjxzdG9wIG9mZnNldD0iLjUiIHN0b3AtY29sb3I9IiMwMzg0ODkiPjwvc3RvcD48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMwMjZkNzEiPjwvc3RvcD48L2xpbmVhckdyYWRpZW50PjxwYXRoIGZpbGw9InVybCgjZURNZ01peGVENk02RVlTWUJ1Sjh5YV85bkxhUjVLRkdqTjBfZ3IxKSIgZD0iTTAuMDAyLDM1LjA0MWgxLjkydi03LjA4NWwyLjY2Nyw2LjA1N2MwLjMyOSwwLjc1NSwwLjc3OSwxLjAyMiwxLjY2MiwxLjAyMiBzMS4zMTUtMC4yNjcsMS42NDQtMS4wMjJsMi42NjctNS45MDJ2Ni45M2gxLjkydi03LjI1OGMwLTAuNjk3LTAuMjc3LTEuMDM1LTAuODQ5LTEuMjA5Yy0xLjM2Ny0wLjQzLTIuMjg1LTAuMDU5LTIuNywwLjg3MiBsLTIuNzM1LDYuMTZsLTIuNjQ5LTYuMTZjLTAuMzk4LTAuOTMtMS4zMzItMS4zMDItMi43LTAuODcyQzAuMjc3LDI2Ljc0OCwwLDI3LjA4NSwwLDI3Ljc4MnY3LjI1OEgwLjAwMnogTTEzLjQ0MSwyOS4yODFoMS45MiB2NC4wNTVjLTAuMDE1LDAuMiwwLjA2NCwwLjczMSwwLjk5LDAuNzQ1YzAuNDcyLDAuMDA4LDIuODIxLDAsMi44NSwwdi00LjhoMS45MmMwLjAwOCwwLDAsNS45NjgsMCw1Ljk5MyBjMC4wMSwxLjQ3Mi0xLjgyOCwxLjY2Mi0yLjY3MywxLjY4N2gtNS4wMDZ2LTAuOTZjMC4wMSwwLDQuNzg3LDAuMDAxLDQuODAxLDBjMS4wODgtMC4xMTUsMC45NTktMC43MTQsMC45NTktMC44OTZ2LTAuMDY0SDE2LjE5IGMtMS42Ny0wLjAxNS0yLjczNS0wLjc1MS0yLjc0Ny0xLjU5QzEzLjQ0MSwzMy4zNzMsMTMuNDc5LDI5LjMxNywxMy40NDEsMjkuMjgxeiI+PC9wYXRoPjxsaW5lYXJHcmFkaWVudCBpZD0iZURNZ01peGVENk02RVlTWUJ1Sjh5Yl85bkxhUjVLRkdqTjBfZ3IyIiB4MT0iMzQuMjI0IiB4Mj0iMzUuMTAxIiB5MT0iMjUuNjQ0IiB5Mj0iMzUuMjE3IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZmY5YzBmIj48L3N0b3A+PHN0b3Agb2Zmc2V0PSIuODEzIiBzdG9wLWNvbG9yPSIjZDY3ZTAwIj48L3N0b3A+PC9saW5lYXJHcmFkaWVudD48cGF0aCBmaWxsPSJ1cmwoI2VETWdNaXhlRDZNNkVZU1lCdUo4eWJfOW5MYVI1S0ZHak4wX2dyMikiIGQ9Ik0yMi4wODEsMzUuMDQxaDQuODA3YzAuNjMsMCwxLjI0Mi0wLjEzMiwxLjcyOC0wLjM2YzAuODEtMC4zNzIsMS4xNDQtMC44NzUsMS4xNDQtMS41MzYgdi0xLjM2OGMwLTEuNDc2LTEuODMtMS41MzYtMi44OC0xLjUzNmgtMS45MmMtMC43NTUsMC0wLjg3LTAuNDU2LTAuOTYtMC45NnYtMC45NmMwLjA5LTAuMzg0LDAuMjU4LTAuOSwwLjkyMy0wLjk2IGMwLjc3MywwLDQuODM2LDAsNC44MzYsMHYtMC45NmgtNC41NjZjLTAuNzU1LDAtMy4xMTQsMC4wOS0zLjExNCwxLjkydjEuMTg3YzAsMC44NCwwLjczOCwxLjUyNCwyLjM0LDEuNjkyIGMwLjE4LDAuMDEyLDAuMzYsMC4wMjQsMC41MzksMC4wMjRjMCwwLDEuODY2LTAuMDM2LDEuOTItMC4wMjRjMS4wOCwwLDAuOTYsMC44NCwwLjk2LDAuOTZ2MC45NmMwLDAuMTMyLTAuMDMsMC45Ni0wLjk3MSwwLjk2IGMtMC4wNzIsMC00Ljc4OSwwLTQuNzg5LDBWMzUuMDQxeiBNNDAuMzIsMzMuMDhjMCwxLjE1OSwwLjY1NSwxLjgwOSwyLjM5MiwxLjkzOWMwLjE2MiwwLjAxMSwwLjMyNSwwLjAyMSwwLjQ4OCwwLjAyMUg0OHYtMC45NiBoLTQuNDM1Yy0wLjk5MSwwLTEuMzI1LTAuNDE2LTEuMzI1LTEuMDExdi02LjY2OWgtMS45MlYzMy4wOHogTTMwLjcwNCwzMy4xMjF2LTQuOGMwLTEuMDIsMC41LTEuNzI0LDEuOTE2LTEuOTJoMC42NzJoMy40NDdoMC41MjUgYzEuNDE2LDAuMTk2LDIuMDgsMC44OTksMi4wOCwxLjkydjQuNzgyYzAsMC44MjctMC4yMTUsMS4yNzEtMC45MTYsMS41NTlMMzkuOTE2LDM2aC0yLjE2bC0xLjA3LTAuOTZoLTEuMjU3bC0yLjEzNiwwLjAxMiBjLTAuMzA5LDAtMC42MzUtMC4wNDMtMC45OTMtMC4xNDFDMzEuMjI2LDM0LjYxOCwzMC43MDQsMzQuMDU0LDMwLjcwNCwzMy4xMjF6IE0zMi42MjQsMzMuMTIxYzAuMDk4LDAuNDY3LDAuNDczLDAuOTYsMS4xNCwwLjk2IGgxLjg2NGwtMS4wNjgtMC45NmgyLjE3NWwwLjUxOSwwLjQ4MmMwLDAsMC4xODYtMC4xNTIsMC4xODYtMC40ODJjMC0wLjMzLTAuMDE2LTQuOC0wLjAxNi00LjhjLTAuMDk4LTAuNDM0LTAuNTM4LTAuOTYtMS4xODgtMC45NiBoLTIuNDcxYy0wLjc0OSwwLTEuMTQsMC41NDgtMS4xNCwxLjA1OEwzMi42MjQsMzMuMTIxTDMyLjYyNCwzMy4xMjF6Ij48L3BhdGg+PGxpbmVhckdyYWRpZW50IGlkPSJlRE1nTWl4ZUQ2TTZFWVNZQnVKOHljXzluTGFSNUtGR2pOMF9ncjMiIHgxPSIzNS4wMjkiIHgyPSI0MC4zNTUiIHkxPSIxMS43MTYiIHkyPSIyNi43NSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iIzA1OGY5MiI+PC9zdG9wPjxzdG9wIG9mZnNldD0iLjUiIHN0b3AtY29sb3I9IiMwMzg0ODkiPjwvc3RvcD48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMwMjZkNzEiPjwvc3RvcD48L2xpbmVhckdyYWRpZW50PjxwYXRoIGZpbGw9InVybCgjZURNZ01peGVENk02RVlTWUJ1Sjh5Y185bkxhUjVLRkdqTjBfZ3IzKSIgZD0iTTQ2LjE5OSwyNS4zODljLTEuMDMxLTAuMDI4LTEuODE4LDAuMDY4LTIuNDkxLDAuMzUxYy0wLjE5MSwwLjA4MS0wLjQ5NiwwLjA4My0wLjUyOCwwLjMyMyBjMC4xMDUsMC4xMSwwLjEyMSwwLjI3NSwwLjIwNSwwLjQxYzAuMTYsMC4yNiwwLjQzMiwwLjYwOSwwLjY3NCwwLjc5MWMwLjI2NSwwLjIsMC41MzgsMC40MTQsMC44MjEsMC41ODcgYzAuNTA0LDAuMzA3LDEuMDY3LDAuNDgzLDEuNTUzLDAuNzkxYzAuMjg2LDAuMTgxLDAuNTcsMC40MTEsMC44NSwwLjYxNWMwLjEzOCwwLjEwMiwwLjIzLDAuMjU5LDAuNDEsMC4zMjMgYzAtMC4wMSwwLTAuMDE5LDAtMC4wMjljLTAuMDk0LTAuMTItMC4xMTktMC4yODUtMC4yMDUtMC40MTFjLTAuMTI3LTAuMTI3LTAuMjU0LTAuMjU0LTAuMzgxLTAuMzgxIGMtMC4zNzItMC40OTQtMC44NDYtMC45MjktMS4zNDgtMS4yODljLTAuNDAxLTAuMjg4LTEuMjk4LTAuNjc3LTEuNDY2LTEuMTQzYy0wLjAxLTAuMDEtMC4wMTktMC4wMTktMC4wMy0wLjAzIGMwLjI4NC0wLjAzMiwwLjYxNy0wLjEzNSwwLjg3OS0wLjIwNWMwLjQ0MS0wLjExOCwwLjgzNC0wLjA4NywxLjI4OS0wLjIwNWMwLjIwNS0wLjA1OSwwLjQxLTAuMTE3LDAuNjE1LTAuMTc2IGMwLTAuMDM5LDAtMC4wNzgsMC0wLjExN2MtMC4yMy0wLjIzNi0wLjM5NS0wLjU0OC0wLjY0NS0wLjc2MmMtMC42NTctMC41NTktMS4zNzMtMS4xMTctMi4xMS0xLjU4MyBjLTAuNDA5LTAuMjU4LTAuOTE1LTAuNDI2LTEuMzQ4LTAuNjQ1Yy0wLjE0Ni0wLjA3NC0wLjQwMi0wLjExMi0wLjQ5OC0wLjIzNGMtMC4yMjgtMC4yOS0wLjM1MS0wLjY1OS0wLjUyNy0wLjk5NiBjLTAuMzY4LTAuNzA4LTAuNzMtMS40ODItMS4wNTUtMi4yMjdjLTAuMjIzLTAuNTA4LTAuMzY4LTEuMDEtMC42NDUtMS40NjZjLTEuMzMxLTIuMTg4LTIuNzY0LTMuNTA5LTQuOTgyLTQuODA3IGMtMC40NzItMC4yNzYtMS4wNDEtMC4zODUtMS42NDItMC41MjhjLTAuMzIzLTAuMDE5LTAuNjQ1LTAuMDM5LTAuOTY4LTAuMDU5Yy0wLjE5Ny0wLjA4My0wLjQwMS0wLjMyMy0wLjU4Ny0wLjQ0IGMtMC43MzUtMC40NjUtMi42MjEtMS40NzUtMy4xNjUtMC4xNDdjLTAuMzQ0LDAuODM4LDAuNTE0LDEuNjU2LDAuODIxLDIuMDgxYzAuMjE1LDAuMjk4LDAuNDkxLDAuNjMyLDAuNjQ1LDAuOTY4IGMwLjEwMSwwLjIyLDAuMTE5LDAuNDQxLDAuMjA1LDAuNjc0YzAuMjEzLDAuNTc0LDAuNTUsMS4yMjgsMC44MjYsMS43NTljMC4xMzksMC4yNjksMC4yOTMsMC41NTEsMC40NjksMC43OTEgYzAuMTA4LDAuMTQ3LDAuMjkzLDAuMjEyLDAuMzIzLDAuNDRjLTAuMTgxLDAuMjUzLTAuMTkxLDAuNjQ2LTAuMjkzLDAuOTY4Yy0wLjQ1OCwxLjQ0NS0wLjI4NSwzLjI0LDAuMzgxLDQuMzA4IGMwLjIwNCwwLjMyOCwwLjY4NiwxLjAzMiwxLjM0OCwwLjc2MmMwLjU3OS0wLjIzNiwwLjQ1LTAuOTY3LDAuNjE1LTEuNjEyYzAuMDM3LTAuMTQ2LDAuMDE0LTAuMjUzLDAuMDg4LTAuMzUxIGMwLDAuMDEsMCwwLjAxOSwwLDAuMDNjMC4xNzYsMC4zNTEsMC4zNTEsMC43MDQsMC41MjgsMS4wNTVjMC4zOTEsMC42MjksMS4wODQsMS4yODYsMS42NywxLjczIGMwLjMwNCwwLjIzLDAuNTQ0LDAuNjI4LDAuOTM4LDAuNzYyYzAtMC4wMSwwLTAuMDE5LDAtMC4wM2MtMC4wMSwwLTAuMDE5LDAtMC4wMywwYy0wLjA3Ni0wLjExOS0wLjE5Ni0wLjE2OC0wLjI5My0wLjI2NCBjLTAuMjI5LTAuMjI1LTAuNDg1LTAuNTA0LTAuNjc0LTAuNzYyYy0wLjUzNC0wLjcyNS0xLjAwNi0xLjUxOS0xLjQzNi0yLjM0NWMtMC4yMDUtMC4zOTUtMC4zODQtMC44MjktMC41NTctMS4yMzEgYy0wLjA2Ny0wLjE1NS0wLjA2Ni0wLjM4OS0wLjIwNS0wLjQ2OWMtMC4xOSwwLjI5NC0wLjQ2OCwwLjUzMi0wLjYxNSwwLjg3OWMtMC4yMzQsMC41NTUtMC4yNjUsMS4yMzMtMC4zNTEsMS45MzQgYy0wLjA1MiwwLjAxOC0wLjAyOSwwLjAwNi0wLjA1OSwwLjAyOWMtMC40MDgtMC4wOTktMC41NTItMC41MTgtMC43MDQtMC44NzljLTAuMzg0LTAuOTEyLTAuNDU1LTIuMzgtMC4xMTctMy40MjkgYzAuMDg3LTAuMjcyLDAuNDgyLTEuMTI3LDAuMzIzLTEuMzc4Yy0wLjA3Ni0wLjI1MS0wLjMyOC0wLjM5Ni0wLjQ2OC0wLjU4N2MtMC4xNzUtMC4yMzYtMC4zNDgtMC41NDgtMC40NjktMC44MjEgYy0wLjMxNC0wLjcxMS0wLjYxMi0xLjUzOC0wLjk0My0yLjI1N2MtMC4xNTgtMC4zNDQtMC40MjUtMC42OTEtMC42NDUtMC45OTZjLTAuMjQzLTAuMzM4LTAuNTE2LTAuNTg3LTAuNzA0LTAuOTk2IGMtMC4wNjctMC4xNDUtMC4xNTgtMC4zNzgtMC4wNTktMC41MjhjMC4wMzItMC4xMDEsMC4wNzYtMC4xNDMsMC4xNzYtMC4xNzZjMC4xNy0wLjEzMiwwLjY0MywwLjA0MywwLjgyMSwwLjExNyBjMC40NywwLjE5NSwwLjg2MiwwLjM4MSwxLjI2LDAuNjQ1YzAuMTkxLDAuMTI3LDAuMzg0LDAuMzcyLDAuNjE1LDAuNDRjMC4wODgsMCwwLjE3NiwwLDAuMjY0LDAgYzAuNDEzLDAuMDk1LDAuODc1LDAuMDMsMS4yNiwwLjE0N2MwLjY4MiwwLjIwNywxLjI5MiwwLjUyOSwxLjg0NiwwLjg3OWMxLjY5LDEuMDY3LDMuMDcxLDIuNTg1LDQuMDE2LDQuMzk3IGMwLjE1MiwwLjI5MiwwLjIxOCwwLjU3LDAuMzUxLDAuODc5YzAuMjcsMC42MjQsMC42MTEsMS4yNjYsMC44NzksMS44NzZjMC4yNjgsMC42MDksMC41MywxLjIyMywwLjkwOSwxLjczIGMwLjIsMC4yNjYsMC45NywwLjQwOSwxLjMxOSwwLjU1N2MwLjI0NSwwLjEwNCwwLjY0NywwLjIxMSwwLjg3OSwwLjM1MWMwLjQ0NCwwLjI2OCwwLjg3NCwwLjU4NywxLjI4OSwwLjg3OSBDNDUuNTI4LDI0LjgwMyw0Ni4xNjcsMjUuMTI0LDQ2LjE5OSwyNS4zODl6Ij48L3BhdGg+PHBhdGggZmlsbD0iIzAwNzk2YiIgZD0iTTMzLjA5OCwxNC4yMjNjLTAuMjE1LTAuMDA0LTAuMzY3LDAuMDIzLTAuNTI4LDAuMDU5YzAsMC4wMSwwLDAuMDE5LDAsMC4wM2MwLjAxLDAsMC4wMTksMCwwLjAzLDAgYzAuMTAzLDAuMjEsMC4yODMsMC4zNDcsMC40MSwwLjUyOGMwLjA5OCwwLjIwNSwwLjE5NSwwLjQxLDAuMjkzLDAuNjE1YzAuMDEtMC4wMSwwLjAxOS0wLjAxOSwwLjAyOS0wLjAyOSBjMC4xODEtMC4xMjgsMC4yNjUtMC4zMzIsMC4yNjQtMC42NDVjLTAuMDczLTAuMDc3LTAuMDg0LTAuMTczLTAuMTQ3LTAuMjY0QzMzLjM2NSwxNC4zOTQsMzMuMjAzLDE0LjMyNSwzMy4wOTgsMTQuMjIzeiI+PC9wYXRoPgo8L3N2Zz4="}
    ]

    let others=[
        {name:"GitHub",src:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNjQiIGhlaWdodD0iNjQiCnZpZXdCb3g9IjAgMCA2NCA2NCIKc3R5bGU9ImZpbGw6IzAwMDAwMDsiPgo8cGF0aCBkPSJNMzIgNkMxNy42NDEgNiA2IDE3LjY0MSA2IDMyYzAgMTIuMjc3IDguNTEyIDIyLjU2IDE5Ljk1NSAyNS4yODYtLjU5Mi0uMTQxLTEuMTc5LS4yOTktMS43NTUtLjQ3OVY1MC44NWMwIDAtLjk3NS4zMjUtMi4yNzUuMzI1LTMuNjM3IDAtNS4xNDgtMy4yNDUtNS41MjUtNC44NzUtLjIyOS0uOTkzLS44MjctMS45MzQtMS40NjktMi41MDktLjc2Ny0uNjg0LTEuMTI2LS42ODYtMS4xMzEtLjkyLS4wMS0uNDkxLjY1OC0uNDcxLjk3NS0uNDcxIDEuNjI1IDAgMi44NTcgMS43MjkgMy40MjkgMi42MjMgMS40MTcgMi4yMDcgMi45MzggMi41NzcgMy43MjEgMi41NzcuOTc1IDAgMS44MTctLjE0NiAyLjM5Ny0uNDI2LjI2OC0xLjg4OCAxLjEwOC0zLjU3IDIuNDc4LTQuNzc0LTYuMDk3LTEuMjE5LTEwLjQtNC43MTYtMTAuNC0xMC40IDAtMi45MjggMS4xNzUtNS42MTkgMy4xMzMtNy43OTJDMTkuMzMzIDIzLjY0MSAxOSAyMi40OTQgMTkgMjAuNjI1YzAtMS4yMzUuMDg2LTIuNzUxLjY1LTQuMjI1IDAgMCAzLjcwOC4wMjYgNy4yMDUgMy4zMzhDMjguNDY5IDE5LjI2OCAzMC4xOTYgMTkgMzIgMTlzMy41MzEuMjY4IDUuMTQ1LjczOGMzLjQ5Ny0zLjMxMiA3LjIwNS0zLjMzOCA3LjIwNS0zLjMzOC41NjcgMS40NzQuNjUgMi45OS42NSA0LjIyNSAwIDIuMDE1LS4yNjggMy4xOS0uNDMyIDMuNjk3QzQ2LjQ2NiAyNi40NzUgNDcuNiAyOS4xMjQgNDcuNiAzMmMwIDUuNjg0LTQuMzAzIDkuMTgxLTEwLjQgMTAuNCAxLjYyOCAxLjQzIDIuNiAzLjUxMyAyLjYgNS44NXY4LjU1N2MtLjU3Ni4xODEtMS4xNjIuMzM4LTEuNzU1LjQ3OUM0OS40ODggNTQuNTYgNTggNDQuMjc3IDU4IDMyIDU4IDE3LjY0MSA0Ni4zNTkgNiAzMiA2ek0zMy44MTMgNTcuOTNDMzMuMjE0IDU3Ljk3MiAzMi42MSA1OCAzMiA1OCAzMi42MSA1OCAzMy4yMTMgNTcuOTcxIDMzLjgxMyA1Ny45M3pNMzcuNzg2IDU3LjM0NmMtMS4xNjQuMjY1LTIuMzU3LjQ1MS0zLjU3NS41NTRDMzUuNDI5IDU3Ljc5NyAzNi42MjIgNTcuNjEgMzcuNzg2IDU3LjM0NnpNMzIgNThjLS42MSAwLTEuMjE0LS4wMjgtMS44MTMtLjA3QzMwLjc4NyA1Ny45NzEgMzEuMzkgNTggMzIgNTh6TTI5Ljc4OCA1Ny45Yy0xLjIxNy0uMTAzLTIuNDExLS4yODktMy41NzQtLjU1NEMyNy4zNzggNTcuNjEgMjguNTcxIDU3Ljc5NyAyOS43ODggNTcuOXoiPjwvcGF0aD4KPC9zdmc+"},
        {name:"Visual Studio Code",src:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNDgiIGhlaWdodD0iNDgiCnZpZXdCb3g9IjAgMCA0OCA0OCIKc3R5bGU9ImZpbGw6IzAwMDAwMDsiPgo8cGF0aCBmaWxsPSIjMjliNmY2IiBkPSJNNDQsMTEuMTF2MjUuNzhjMCwxLjI3LTAuNzksMi40LTEuOTgsMi44MmwtOC44Miw0LjE0TDM0LDMzVjE1TDMzLjIsNC4xNWw4LjgyLDQuMTQgQzQzLjIxLDguNzEsNDQsOS44NCw0NCwxMS4xMXoiPjwvcGF0aD48cGF0aCBmaWxsPSIjMDI3N2JkIiBkPSJNOSwzMy44OTZMMzQsMTVWNS4zNTNjMC0xLjE5OC0xLjQ4Mi0xLjc1OC0yLjI3NS0wLjg2TDQuNjU4LDI5LjIzOSBjLTAuOSwwLjgzLTAuODQ5LDIuMjY3LDAuMTA3LDMuMDMyYzAsMCwxLjMyNCwxLjIzMiwxLjgwMywxLjU3NEM3LjMwNCwzNC4zNyw4LjI3MSwzNC40Myw5LDMzLjg5NnoiPjwvcGF0aD48cGF0aCBmaWxsPSIjMDI4OGQxIiBkPSJNOSwxNC4xMDRMMzQsMzN2OS42NDdjMCwxLjE5OC0xLjQ4MiwxLjc1OC0yLjI3NSwwLjg2TDQuNjU4LDE4Ljc2MSBjLTAuOS0wLjgzLTAuODQ5LTIuMjY3LDAuMTA3LTMuMDMyYzAsMCwxLjMyNC0xLjIzMiwxLjgwMy0xLjU3NEM3LjMwNCwxMy42Myw4LjI3MSwxMy41Nyw5LDE0LjEwNHoiPjwvcGF0aD4KPC9zdmc+"},
        {name:"Recharts", src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB8ElEQVR4nO2YwWpTQRSGP0NCRbqvii7duelDVJo2mDco+gQu2kXFhdu+QfsMddWWbnTjMxTpoiS0JBoLhUpWFYk5ZeC/MISGeJObe+fW+WE2YWZyvvPPnJm5EBU1i9aB70AXqFNidQFT61Bi9e4DyGtg6EGsUkItAZeC2KKkegAcC+IrUKGk2hTENfCckuolcCOQJiXVQ+BEELshHWBrKcfuCeIUeERAB5gDqv7juKbG/AaWKVivvLqftBbwZgLQU+BK/d1GL7RcbgMDBdPXiXzuAbWBt0BtZGwF+KI+nzVXIVoE9hWIc2PHq/su6A3gzAO6AN4BC+qzpd+v5Ewim9Ay1Qvgmyb+BTTG9KvJjbYXiHPrp5cAdx2hCJCGgjfBOKhJqmq/tEaC6t3Rd+4gbg1/BP5qwk9aXmnkgH5MuNXavEAa+vO+Jhpog0+7OddUqjtjbrVzAXk2ksGhSu08ZVmBVJS1A6+s5vnAsVlBngAfVCaTQX+AQwHk9cCxtCDJ3cgFeKSg/UPsPfCY/GVpQfy7UZJ9V4lWUj5ost6cNgtIV0/MaVQ4SF0As343KhwkK0WQsjqSdb/MFUHIyZGiMm0RZIyiI+S0tCzwtW8RhLAybdERwsq0RUcIK9MWHSGsTFt0hLAybdERwsq0/TeO3ALTPxOyPOYYDQAAAABJRU5ErkJggg=="},
        {name:"Agile Metodologies",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACOklEQVR4nO2Yz0tVQRTHP0/LFi2CiiTNTQUhtTAtWrZyY7iyrblNMn8U+Bdki0qj3qKVmzbpQhAJFF2kIJIQuVSRVvWoaKEWEf7IGxfmxeHwngrO0TtyPzCbO8N3zrkzc87MgZSUlJTDRgmQBX4BjwjQ+H4gcm2FgI2PgF4CIQO8Usb3O6eCoE8ZH7dNIAd8AAaBO8ApEkqugAOF2gYwAFwkYXTv0oF8W3fno+wgjK0E3gIjwEnxvQ34K4z8CtQDdUAn8E71x20KOL2fxp8DPgkDOlR/E/BH9C+p/hpgTDmxtF9OHAfmxMRrziDNTWDZjflcROueOw+RWAnz7ZRVEeb2NmPPu3NRvc2YBuWEac6oUfv3rifdNrWiFzBiWEw06RKXL8aEdhxivVPltkw8wRZwxXB1N1Rk88J98YemsWFSzNHsW3xIiLdjQ5eYI752eGVRiN/Ahmtijnnf4j+FeAU2VIg5Vn2Ly1h9FBuOqQufV74J8RPYr8Cyb/GPQvwqNly3PANvhHgrNjywjEItQnwCG6YMrin/KRcH2SIT16pMfBYDXos/NOpZe9xy++S5JO5DPpe5XYXPyxjSo66+jXvUu6VyzFPVH7/2vgDPfZVnjgAzyonWPfx5afxsgRdZLok1plq15yNgAThTYOyTgy6UlboMGyephy5U6qrE+yLGFytV7ujEY1VVSGJ7Wcz4jCuJRwlvv3eKNElfgRcEQib0ivezkI2P+R6y8fmH/g+XoYMzPiUlhd3xD+pxbV+80pIbAAAAAElFTkSuQmCC"},

    ]

    useEffect(() => {
            
    },[english]);
    
    return english?(
      <div class="bg-[url('/public/bg-portfolio.png')] min-h-screen h-full w-full bg-cover bg-center">   
       <div className="flex justify-end xl:justify-start ">
      <img src="/VJ_logo2.svg" alt="img" className="xl:w-40 fixed xl:mt-5 xl:ml-5 w-10 mr-3 xl:mr-0 mt-3"/> 
    </div>    
      <NavBar />
        <div className=" border-teal-300 border-solid border-2 backdrop-blur px-6 lg:px-8 mx-4 md:mx-48 py-5 md:py-15  my-1 lg:my-0  grid content-center place-content-center">
            
                
                <p className="font-sans text-center text-xl font-bold tracking-width pb-10 p-t-1 text-amber-400 sm:text-3xl">
                            I have experience working with...
                </p>
                <div className=" grid grid-cols-1 lg:grid-cols-3 ">
                        <div className="text-center my-10 lg:mr-5 lg:my-0 grid lg:col-span-2 ">
                          <p className=" animate__animated animate__fadeIn font-sans text-xl font-bold tracking-width pb-8  text-amber-400 sm:text-3xl">
                            Technologies
                          </p>
                          <div className="grid grid-cols-2 xl:gap-x-6 gap-x-2 gap-y-4 content-center place-content-center">
                            {tecs.map(t=>
                            <div className="animate__animated animate__fadeIn hover:animate-pulse hover:ease-in-out grid grid-cols-5 gap-x-4  rounded-full  bg-white border-teal-400 border-solid border-2 px-3 xl:px-6 text-sm font-semibold leading-10 shadow-sm">
                                <img src={t.src} alt="img" className="xl:h-12 h-8 col-span-2"/>
                                <h6 className="text-teal-700 text-center grid content-center place-content-center col-span-3">{t.name}</h6>  
                            </div>)}
                          </div>
                        </div>

                        <div className="text-center lg:pl-1 lg:mx-0  lg:my-0  xl:border-l-2 xl:border-teal-400  ">
                        <p className="animate__animated animate__fadeIn font-sans text-xl font-bold tracking-width pb-8  text-amber-400 sm:text-3xl">
                            Others
                          </p>
                          <div className="grid content-center gap-y-4 gap-x-1 place-content-center ">
                            {others.map(t=>
                            <div className="animate__animated animate__fadeIn hover:animate-pulse hover:ease-in-out grid grid-cols-5  rounded-full  bg-white border-teal-400 border-solid border-2 px-6 text-sm font-semibold leading-10 shadow-sm">
                                <img src={t.src} alt="img" className="h-12 col-span-1"/>
                                <h6 className="text-teal-700 text-center grid content-center place-content-center col-span-4">{t.name}</h6>  
                            </div>)}
                          </div>
                        </div>
    
                </div>
          </div>
          <div className="fixed bottom-0 right-0"><ChatIngles /></div>
        </div>):
        (<div class="bg-[url('/public/bg-portfolio.png')] min-h-screen h-full w-full bg-cover bg-center">   
         <div className="flex justify-end xl:justify-start ">
      <img src="/VJ_logo2.svg" alt="img" className="xl:w-40 fixed xl:mt-5 xl:ml-5 w-10 mr-3 xl:mr-0 mt-3"/> 
    </div>    
        <NavBar />
          <div className=" border-teal-300 border-solid border-2 backdrop-blur px-6 lg:px-8 mx-4 md:mx-48 py-5 md:py-15  my-1 lg:my-0  grid content-center place-content-center">
              
                  
                  <p className="font-sans text-center text-xl font-bold tracking-width pb-10 p-t-1 text-amber-400 sm:text-3xl">
                              Tengo experiencia trabajando con...
                  </p>
                  <div className=" grid grid-cols-1 lg:grid-cols-3 ">
                          <div className="text-center my-10 lg:mr-5 lg:my-0 grid lg:col-span-2 ">
                            <p className="animate__animated animate__fadeIn font-sans text-xl font-bold tracking-width pb-8  text-amber-400 sm:text-3xl">
                              Tecnologías
                            </p>
                            <div className="grid grid-cols-2 xl:gap-x-6 gap-x-2 gap-y-4 content-center place-content-center">
                              {tecs.map(t=>
                              <div className="animate__animated animate__fadeIn hover:animate-pulse hover:ease-in-out grid grid-cols-5 gap-x-4  rounded-full  bg-white border-teal-400 border-solid border-2 px-3 xl:px-6 text-sm font-semibold leading-10 shadow-sm">
                                  <img src={t.src} alt="img" className="xl:h-12 h-8 col-span-2"/>
                                  <h6 className="text-teal-700 text-center grid content-center place-content-center col-span-3">{t.name}</h6>  
                              </div>)}
                            </div>
                          </div>
  
                          <div className="text-center lg:pl-1 lg:mx-0  lg:my-0  xl:border-l-2 xl:border-teal-400  ">
                          <p className="animate__animated animate__fadeIn font-sans text-xl font-bold tracking-width pb-8  text-amber-400 sm:text-3xl">
                              Otros
                            </p>
                            <div className="grid content-center gap-y-4 gap-x-1 place-content-center ">
                              {others.map(t=>
                              <div className="animate__animated animate__fadeIn hover:animate-pulse hover:ease-in-out grid grid-cols-5  rounded-full  bg-white border-teal-400 border-solid border-2 px-6 text-base font-semibold leading-10 shadow-sm">
                                  <img src={t.src} alt="img" className="h-12 col-span-1"/>
                                  <h6 className="text-teal-700 text-center grid content-center place-content-center col-span-4">{t.name}</h6>  
                              </div>)}
                            </div>
                          </div>
      
                  </div>
            </div>
            <div className="fixed bottom-0 right-0"><Chat /></div>
          </div>)
        
}