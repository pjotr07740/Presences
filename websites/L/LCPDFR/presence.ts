const presence = new Presence({
  clientId: "768903129194037260"
});

presence.on("UpdateData", () => {
  const doc = document.location,
    path = doc.pathname,
    route = path.split("/"),
    browsingStamp = Math.floor(Date.now() / 1000),
    presenceData: PresenceData = {
      largeImageKey: "lg",
      startTimestamp: browsingStamp,
      state: document.title
    };


  // Homepage
  if (path == "/") {
    presenceData.details = "Browsing the homepage";
  }

  // News page
  else if (route[1] == "news") {
    if (route[3] == "records") {
      presenceData.details = "Viewing a news topic";
      presenceData.state = document.getElementsByClassName("ipsType_break")[0].textContent;
    }
    else {
      presenceData.details = "Browsing the news page";
    }
  }

  // Forums page
  else if (route[1] == "forums") {
    if (route[2] == "topic") {
      presenceData.details = "Browsing a topic";
      presenceData.state = document.getElementsByClassName("ipsType_pageTitle")[0].textContent;
    }
    else if (route[2] == "forum") {
      presenceData.details = "Browsing a forum";
      presenceData.state = document.getElementsByClassName("ipsType_pageTitle")[0].textContent;
    }
    else {
      presenceData.details = "Browsing the forums page";
    }
  }

  // Gallary page
  else if (route[1] == "gallery") {
    if (route[2] == "image") {
      presenceData.details = "Viewing a image";
      presenceData.state = document.getElementsByClassName("ipsType_pageTitle")[1].textContent;
    }
    else if (route[2] == "album") {
      presenceData.details = "Viewing a album";
      presenceData.state = document.getElementsByClassName("ipsType_pageTitle")[0].textContent;
    }
    else if (route[2] == "category") {
      presenceData.details = "Browsing a category";
      presenceData.state = document.getElementsByClassName("ipsType_pageTitle")[0].textContent;
    }
    else {
      presenceData.details = "Browsing the gallery";
    }
  }

  // Guidelines page
  else if (route[1] == "guideline-hub") {
    if (route[2]) {
      presenceData.details = "Viewing a guideline page";
      presenceData.state = document.getElementsByClassName("ipsType_pageTitle")[0].textContent;
    }
    else {
      presenceData.details = "Browsing the guidelines";
    }
  }

  // Leaderboard page
  else if (route[1] == "leaderboard" || route[1] == "pastleaders" || route[1] == "topmembers") {
    presenceData.details = "Viewing the leaderboard";
  }

  // Socialmedia page
  else if (route[1] == "social") {
    presenceData.details = "Viewing the social media page";
  }

  // Staff page
  else if (route[1] == "staff") {
    presenceData.details = "Viewing the staff page";
  }

  // Downloads page
  else if (route[1] == "downloads") {
    if (route[4]) {
      presenceData.details = "Viewing a file"
      presenceData.state = document.getElementsByClassName("ipsType_pageTitle")[0].textContent;
      }
    else if (route[2] == "gta5mods") {
      presenceData.details = "Browsing the GTA 5 downloads section";
    }
    else if (route[2] == "gta4mods") {
      presenceData.details = "Browsing the GTA 4 downloads section";
    }
    else if (route[2] == "dev-resources") {
      presenceData.details = "Browsing the developer resources";
    }
    else if (route[2] == "trending") {
      presenceData.details = "Browsing the trending page";
    }
    else if (route[2] == "featured") {
      presenceData.details = "Browsing the featured page";
    }
    else if (route[2] == "history") {
      presenceData.details = "Viewing download history";
    }
    else {
      presenceData.details = "Browsing the downloads";
    }
  }

  // lspdfr page
  else if (route[1] == "lspdfr") {
    if (route[3] == "highlights") {
      presenceData.details = "Viewing LSPDFR 0.4 highlights";
    }
    else if (route[3] == "features") {
      presenceData.details = "Viewing the LSPDFR guide";
    }
    else if (route[2] == "how-to-install") {
      presenceData.details = "Watching the LSPDFR installation guide";
    }
    else if (route[3] == "activity") {
      presenceData.details = "Viewing the total amount of people playing LSPDFR";
    }
    else if (route[2] == "about") {
      presenceData.details = "Viewing the LSPDFR about page";
    }
    else {
      presenceData.details = "Browsing the lspdfr section"
    }
  }
  
  else if (route[1] == "lml") {
    if (route[2] == "faq") {
      presenceData.details = "Viewing the frequently asked questions";
    }
    else if (route[2] == "wiki") {
      presenceData.details = "Browsing the wiki";
    }
    else {
      presenceData.details = "Viewing the LML page";
    }
  }

  if (presenceData.details == null) {
    presence.setTrayTitle();
    presence.setActivity();
  } else {
    presence.setActivity(presenceData);
  }
});
