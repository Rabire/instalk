const { User, Target, Track } = require("../models");
const { tryGetUserFromToken } = require("../utils/user.js");
const axios = require("axios");

exports.create = async (req, res) => {
  const bodyReceived = req.body;

  // Token verrif
  // get stalker id
  let currentUser;
  try {
    currentUser = await tryGetUserFromToken(req, res);
  } catch {
    return res.status(401).send("invalid token");
  }

  // get IG username of the target
  if (!bodyReceived.targetInstagramUsername)
    return res.status(401).send("target missing");

  const targetInstagramUsername = bodyReceived.targetInstagramUsername;

  try {
    // if target already in target list
    //      return ok
    // else create target

    // api get this user
    const target = await axios
      .get(`https://www.instagram.com/rabire_/?__a=1`)
      .then((response) => console.log(response));

    // verrif if isPrivate => dostuff is true
    if (target?.isPrivate) {
      return res.status(402).send("traget profile is private");
    }

    const targetToCreate = {
      instagramId: target.id,
      username: target.username,
      fullname: target.full_name,
      pictureUrl: target.profile_pic_url_hd,
      credentialsToAccessId: "",
    };

    let createdTarget;
    if (targetExists) {
    } else {
      await Target.create(targetToCreate);
    }

    // if not aready tracked
    const isAlreadyTrackedByStalker = await !!Track.findOne({
      where: {
        [Op.and]: [
          { targetId: createdTarget.id },
          { stalkerId: bodyReceived.username },
        ],
      },
    });

    // create track
    if (isAlreadyTrackedByStalker) {
      return res.status(401).send("you aready track this target");
    } else {
      const trackToCreate = {
        targetId: createdTarget.id,
        stalkerId: currentUser.id,
      };

      await Track.create(trackToCreate);
      return await res.status(200);
    }

    return await res.status(200).send("targetData");
  } catch (err) {
    console.log(err);
    return res.sendStatus(500);
  }
};

/*
Token check
  => const stalker

Body check
  => const targetUsername

axios getTargetInstagramData
  => const targetInstagramData

const targetInDb

!targetInDb ? canAccessToTargetProfil ? Target.create() : 400
  => const target

const isAlreadyTrackedByStalker

isAlreadyTrackedByStalker ? 400 : Track.create

=> 200

*/
