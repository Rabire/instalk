"use strict";

const { Op } = require("sequelize");

const superUser = {
  id: 1,
  username: "superadmin",
  email: "superadmin@gmail.com",
  password: "aaa",
  penisSize: 50,
  createdAt: new Date(),
  updatedAt: new Date(),
};

const botCredentials = {
  id: 1,
  ownerId: superUser.id,
  username: "rabireh69@gmail.com",
  password: "rabire",
  createdAt: new Date(),
  updatedAt: new Date(),
};

const target = {
  id: 1,
  instagramId: "2621480436",
  username: "rabire_",
  fullname: "Rabire",
  pictureUrl:
    "https://scontent-cdt1-1.cdninstagram.com/v/t51.2885-19/s320x320/120454079_343851196725862_4052356271230671259_n.jpg?_nc_ht=scontent-cdt1-1.cdninstagram.com&_nc_ohc=suMXCo0XzEUAX9VpBbu&tp=1&oh=c7b908f5b297f516796987a780570d04&oe=600FDAC9",
  createdAt: new Date(),
  updatedAt: new Date(),
};

const track = {
  id: 1,
  stalkerId: superUser.id,
  targetId: target.id,
  createdAt: new Date(),
  updatedAt: new Date(),
};

const targetData = {
  id: 1,
  targetId: target.id,
  followers:
    '["ange_d808","greedmp","zinedine.gdb","spn_beats","yliesfw","arthur.amr","kmii__r","leaapillon","aleex__066","mehdi.lamri","mehdizazoui","julierlly","clairelisefrt","leyla.louet","barberaymane","pauline.bnmontero","leaafdm","morgan_ehni","adl.zr1","dorian_elguzman","panda_a_lunettes","nada.tns","camille.mmd","louna.bois","mehidi.zaki","le_bapz","annaschrzl","agathe_fig","ninon_gllc","98ghis","faustinedtrv","louis_cms","fury_in_veins","virg_stan","walax89","dcsy_69","jeremie_chvetzoff","lmondeto","sarahbergue","sanabtmn","estelle_riv","qzbr3_2","onlypvibes","maxettokoff","n._hm","evannourikyan","meelo_974","aline_spano","amram.noam","kiki_kip","amin_maj20","vas_y_lui","angel.prrt","_matozzz_","yanis_ek","yann_bndo","nawer_lp","malo_dgrs","lucas_lije","lucas_nvrr","zoheir_bta","comptesupprimeeeeeeer36479","gdn_69","margaux.jhs","pamz_therapy","edgarlionard","leo.rchs","1jour1astuce","emmarssch","heloise_lclq","sgainz_9","florence.bos","cxl_tch","thomas.mtnez","tristanmre","mae_lncl","quentindrd_","hazoulou","arthurgrs_","julia_dsvlt","_cestpasversaillesici","leo_dima1","marveiig","alicebuyer","_hamzatt_","matthias_cassani","joshua___69","sacha_badi","melnrcs","vincent_piernot","lucas.pilla","spn_s69","obruoo","ranky_coh","benji.dura","giroud.martin","stilyana_69","alizee_drx","ramzi_695","a.krm69","shidoshi69","sofian.dbo","zoenoailly","joycefontep","loriswitters","alexmrnt","thomas_kb9","el_barto1999","k_r123as","emmadfrn","__namno","max__gnt","sappes_135_off","_sktkl","joac_rnd","lycee_branly_69","team__rmz","matt_cvt7","clemence.marbach","leandre_cnrd","brice_jdt","valentindelorme_","ozgur.oguzhan1","ach11_ezanno","mickaelpvl","tibo_zimmer","veni_lopes","victor_tchf","zzzauurelien","perrin.bastien","lilianchafai","delgadoadrien","lil.clem","thomas_bkt22","lounes_csi","lp.perrot","caroliineuuuh","theotxr","lunamichelon","basnardone","tom_blanc","violette.pp","teddy_fontep","margothassenfratz","mathieu_slbs","diego2bbs","justine.noailly","cyriaque_dl","_rabah._","victorsimbab","engueee","davidchemama","nclsoueeau","cloe_porta","jb_plasencia","ju_hoff_","lucile_grdr","suz_ge","sihamket","kaoooooooooooooooooooooohfy","jandja8","carlamariemagro","arnaud1_" ]',
  following:
    '["morgan_chapa","greedmp","ol","yassencore","zinedine.gdb","yliesfw","kmii__r","arthur.amr","leaapillon","psg","bxbouchkx","aleex__066","julierlly","clairelisefrt","leyla.louet","barberaymane","pauline.bnmontero","leaafdm","clubdurhone_officiel","dorian_elguzman","adl.zr1","panda_a_lunettes","nada.tns","camille.mmd","m_el_ou","mehidi.zaki","michal_koala","le_bapz","annaschrzl","edgarlionard","agathe_fig","morgan_ehni","ninon_gllc","98ghis","faustinedtrv","jeremie_chvetzoff","dcsy_69","sarahbergue","sanabtmn","estelle_riv","qzbr3_2","maxettokoff","iamsaikofficiel","sofiane.benchohra","nabilharyouli","evannourikyan","meelo_974","aline_spano","amram.noam","kiki_kip","amin_maj20","vas_y_lui","angel.prrt","luigi_tacinelli","_matozzz_","yanis_ek","yann_bndo","nawer_lp","malo_dgrs","lucas_lije","lucas_nvrr","zoheir_bta","gdn_69","cyriaque_dl","louna.bois","emmarssch","heloise_lclq","florence.bos","cxl_tch","thomas.mtnez","mae_lncl","quentindrd_","hazoulou","arthurgrs_","delgadoadrien","zzzauurelien","diego2bbs","emiliensarrola","marveiig","leo_dima1","_hamzatt_","matthias_cassani","joshua___69","sacha_badi","melnrcs","vincent_piernot","obruoo","virg_stan","benji.dura","_.pointed._","spn_beats","florian_cql_","giroud.martin","stilyana_69","alizee_drx","ramzi_695","tea_cottin","chris_grx_","kaptain_dadax","mathysfr_","sabry_hrb","free_gucci1","brice_jdt","sofian.dbo","zoenoailly","joycefontep","n._hm","loriswitters","alexmrnt","spn_s69","thomas_kb9","ineskhdj","shidoshi69","joac_rnd","alexandradbz","sarradorable","emmadfrn","__namno","max__gnt","justine.noailly","_cestpasversaillesici","matt_cvt7","clemence.marbach","mathieu_slbs","leandre_cnrd","lp.perrot","ozgur.oguzhan1","mickaelpvl","tibo_zimmer","veni_lopes","victor_tchf","perrin.bastien","tristanvauvert","d_j_a_m_s_o_u","lounes_csi","violette.pp","ach11_ezanno","lucas.pilla","lil.clem","caroliineuuuh","lolabnk","lunamichelon","tom_blanc","engueee","capucinetrabarel","nclsoueeau","manonbtms","lucile_grdr","suz_ge","arnaud1_","arthur___cohen","zachjve","carlamariemagro", "ju_hoff_", "ap.blz"]',
  createdAt: new Date(),
  updatedAt: new Date(),
};

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("user", [superUser], {});
    await queryInterface.bulkInsert(
      "instagramcredentials",
      [botCredentials],
      {}
    );
    await queryInterface.bulkInsert("track", [track], {});
    await queryInterface.bulkInsert("target", [target], {});
    return queryInterface.bulkInsert("targetdata", [targetData], {});
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("user", { id: superUser.id }, {});
    await queryInterface.bulkDelete(
      "instagramcredentials",
      { id: botCredentials.id },
      {}
    );
    await queryInterface.bulkDelete("track", { id: track.id }, {});
    await queryInterface.bulkDelete("target", { id: target.id }, {});
    return queryInterface.bulkDelete("targetdata", { id: targetData.id }, {});
  },
};
