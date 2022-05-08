/* wapi setup */
const ops = new Set(); //set of opponent usernames
const provider = "api.web10.app"
const wapi = wapiInit("https://auth.web10.app", "rtc.web10.app");
authButton.onclick = wapi.openAuthPortal;

function initApp() {
    authButton.innerHTML = "log out";
    authButton.onclick = () => {
        wapi.signOut();
        window.location.reload();
    };
    const t = wapi.readToken();
    message.innerHTML = `hello ${t["provider"]}/${t["username"]},<br>`;
    versus.style.display = "block";
    wapi.initP2P(loadOpposition, "fps-game-device")
}

if (wapi.isSignedIn()) initApp();
else wapi.authListen(initApp);

function loadOpposition(conn, data) {
    const username = conn.peer.split(" ")[1]
    const playerIdx = [...ops].indexOf(username);
    
    //if the player is in your lobby
    if (playerIdx != -1) {
        data["spheres"].map((opS, idx) => {
            var s = spheres[10 * (playerIdx + 1) + idx]
            s.collider.center.copy(opS.pos)
            s.velocity.copy(opS.vel)
            s.mesh.material.color = opS.color
        })
        console.log(playerIdx)
        const opMesh = opMeshes[playerIdx];
        opMesh.position.copy(data["player"].pos);
        opMesh.position.y = opMesh.position.y - .25;
    }
}

function addOp(opponentUsername) {
    ops.add(opponentUsername);
    var lobby = ""
    ops.forEach((op) => { lobby += `${op}<br>` });
    lobbyDiv.innerHTML = lobby;
}

//called on every frame to send physics data to other players
function sendState(spheres, playerVelocity, playerCollider) {
    const spheresData = spheres.slice(0, spheresPerPlayer).map((sphere, idx) => {
        return {
            idx: idx,
            pos: sphere.collider.center,
            vel: sphere.velocity,
            color: sphere.mesh.material.color
        }
    })
    const player = {
        pos: playerCollider.end,
        vel: playerVelocity,
        color: "red"
    }
    const data = {
        spheres: spheresData,
        player: player
    }
    ops.forEach((op) => {
        wapi.send(
            provider,
            op,
            window.location.hostname,
            "fps-game-device",
            data
        )
    })
}