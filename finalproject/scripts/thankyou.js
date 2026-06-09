const params = new URLSearchParams(window.location.search);

document.getElementById("displayName").textContent =
    params.get("fullname") || "N/A";

document.getElementById("displayEmail").textContent =
    params.get("email") || "N/A";

document.getElementById("displayPhone").textContent =
    params.get("phone") || "N/A";

document.getElementById("displayDate").textContent =
    params.get("reservationDate") || "N/A";

document.getElementById("displayTime").textContent =
    params.get("reservationTime") || "N/A";

document.getElementById("displayGuests").textContent =
    params.get("guests") || "N/A";

document.getElementById("displayOccasion").textContent =
    params.get("occasion") || "None";

document.getElementById("displayRequests").textContent =
    params.get("requests") || "None";

document.getElementById("displayTimestamp").textContent =
    params.get("timestamp") || "N/A";