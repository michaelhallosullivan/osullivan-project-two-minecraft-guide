
//This will contain all of the imageURL from cloudinary
const itemImageMap = {

    //Basic (ids: 1-6)
    stick: "https://res.cloudinary.com/ddnwvsd9o/image/upload/v1688422474/Basic/stick-crafting_painj4.png",
    torch: "https://res.cloudinary.com/ddnwvsd9o/image/upload/v1688420999/Basic/ss438djpm8hohwohnnby.png",
    furnace: 'https://res.cloudinary.com/ddnwvsd9o/image/upload/v1688420998/Basic/ninf5dp0custdbnj7exb.png',
    crafting_table: 'https://res.cloudinary.com/ddnwvsd9o/image/upload/v1688420998/Basic/fhdcrsayeuwuysfmknf8.png',
    chest: "https://res.cloudinary.com/ddnwvsd9o/image/upload/v1688420997/Basic/ghqh4tjxbtj6d6fhntgo.png",
    wood_planks: "https://res.cloudinary.com/ddnwvsd9o/image/upload/v1688420997/Basic/eivkqx8q6styzclqz44i.gif",

    //Tool (7-18)
    axe: "https://res.cloudinary.com/ddnwvsd9o/image/upload/v1687837128/gc64wfdwvlbzjdgjzib6.gif",
    pickaxe: "https://res.cloudinary.com/ddnwvsd9o/image/upload/v1688421005/Tools/vqyjnyhqm68xcurqomkn.gif",
    fishing_rod: "https://res.cloudinary.com/ddnwvsd9o/image/upload/v1688421164/Tools/mbzwlyekiopxofu3w2kh.png",
    bucket: "https://res.cloudinary.com/ddnwvsd9o/image/upload/v1688421163/Tools/f3cb6qllubhcycfl6xx0.png",
    shovel: "https://res.cloudinary.com/ddnwvsd9o/image/upload/v1688421006/Tools/hdxwndlsc6cqgpifnmrx.gif",
    shears: "https://res.cloudinary.com/ddnwvsd9o/image/upload/v1688421006/Tools/n1bvzs1ebxdioirsfjpj.png",
    map: "https://res.cloudinary.com/ddnwvsd9o/image/upload/v1688421004/Tools/ojg8krumvaxcrrl1thke.png",
    hoe: "https://res.cloudinary.com/ddnwvsd9o/image/upload/v1688421003/Tools/fjolpjd9k12asl65m7rb.gif",
    flint_steel: "https://res.cloudinary.com/ddnwvsd9o/image/upload/v1688421002/Tools/kcs40rwl3esq7igawasz.png",
    compass: "https://res.cloudinary.com/ddnwvsd9o/image/upload/v1688421001/Tools/prenumszy9gkmcxmedni.png",
    clock: "https://res.cloudinary.com/ddnwvsd9o/image/upload/v1688421001/Tools/ljntcgncnpakotete9qi.png",
    carrot_stick: "https://res.cloudinary.com/ddnwvsd9o/image/upload/v1688421000/Tools/kre8hnrkb9eo2rdtxovt.png", 

    //Weapon (19-30)
    leggings: "https://res.cloudinary.com/ddnwvsd9o/image/upload/v1688422238/Weapons%20%2B%20Armor/nwr2otvj6h41ck4qdson.gif",
    helmet: "https://res.cloudinary.com/ddnwvsd9o/image/upload/v1688422237/Weapons%20%2B%20Armor/zjl139kg3twdcpicu4m6.gif",
    chest_plate: "https://res.cloudinary.com/ddnwvsd9o/image/upload/v1688422236/Weapons%20%2B%20Armor/hmpeykbpmiwyskxfccek.gif",
    boots: "https://res.cloudinary.com/ddnwvsd9o/image/upload/v1688422235/Weapons%20%2B%20Armor/j1oeykl5ylvnavmbhngo.gif",
    tipped_arrow: "https://res.cloudinary.com/ddnwvsd9o/image/upload/v1688421012/Weapons%20%2B%20Armor/lvfrkikcgoykfcxmb3pa.png",
    sword: "https://res.cloudinary.com/ddnwvsd9o/image/upload/v1688421011/Weapons%20%2B%20Armor/mzzs9g0th9khph3opgup.gif",
    spectral_arrow: "https://res.cloudinary.com/ddnwvsd9o/image/upload/v1688421010/Weapons%20%2B%20Armor/ngz8q3nelsgsjxu1o3vj.png",
    shield: "https://res.cloudinary.com/ddnwvsd9o/image/upload/v1688421010/Weapons%20%2B%20Armor/idsbcy4y8ndctfojsrsm.gif",
    patterned_shield: "https://res.cloudinary.com/ddnwvsd9o/image/upload/v1688421009/Weapons%20%2B%20Armor/kofnybalipxt5bvhxnpb.png",
    damaged_shield: "https://res.cloudinary.com/ddnwvsd9o/image/upload/v1688421008/Weapons%20%2B%20Armor/qsu0jxlf4mshzrvhusnm.png",
    arrow: "https://res.cloudinary.com/ddnwvsd9o/image/upload/v1688421008/Weapons%20%2B%20Armor/qppn0khp7jdpyxrhyfrz.png",
    bow: "https://res.cloudinary.com/ddnwvsd9o/image/upload/v1688421007/Weapons%20%2B%20Armor/zwqyb08irtowucbh7488.png",
    
    //Manufactured (31-78)
    polished_andesite: "https://res.cloudinary.com/ddnwvsd9o/image/upload/v1688422475/Manufactured/polished-andesite-crafting_a9ms4o.png",
    nether_brick: "https://res.cloudinary.com/ddnwvsd9o/image/upload/v1688422475/Manufactured/nether-brick-crafting_tyj4ok.png",
    pillar_quartz: "https://res.cloudinary.com/ddnwvsd9o/image/upload/v1688422475/Manufactured/pillar-quartz-block-crafting_tgx1gr.png",
    wood_slab: "https://res.cloudinary.com/ddnwvsd9o/image/upload/v1688422474/Manufactured/wood-slabs-crafting_mcnciz.gif",
    nether_wart: "https://res.cloudinary.com/ddnwvsd9o/image/upload/v1688422474/Manufactured/nether-wart-block-crafting_ow1vyo.png",
    stone_stairs: "https://res.cloudinary.com/ddnwvsd9o/image/upload/v1688422474/Manufactured/stone-stairs-crafting_jhmdyb.gif",
    stone_slab: "https://res.cloudinary.com/ddnwvsd9o/image/upload/v1688422474/Manufactured/stone-slabs-crafting_weonod.gif",
    stained_clay: "https://res.cloudinary.com/ddnwvsd9o/image/upload/v1688422474/Manufactured/stained-clay-crafting_teitzm.gif",
    stone_brick: "https://res.cloudinary.com/ddnwvsd9o/image/upload/v1688422474/Manufactured/stone-brick-crafting_dprhsc.png",
    smooth_sandstone: "https://res.cloudinary.com/ddnwvsd9o/image/upload/v1688422474/Manufactured/smooth-sandstone-crafting_yvzdgp.gif",
    snow_block: "https://res.cloudinary.com/ddnwvsd9o/image/upload/v1688422474/Manufactured/snow-block-crafting_y7emo0.png",
    sea_lantern: "https://res.cloudinary.com/ddnwvsd9o/image/upload/v1688422474/Manufactured/sea-lantern-crafting_wcyxfh.png",
    slime_block: "https://res.cloudinary.com/ddnwvsd9o/image/upload/v1688422474/Manufactured/slime-block-crafting_md8ysa.png",
    sandstone: "https://res.cloudinary.com/ddnwvsd9o/image/upload/v1688422473/Manufactured/sandstone-crafting_nytnjt.gif",
    prismarine_brick: "https://res.cloudinary.com/ddnwvsd9o/image/upload/v1688422473/Manufactured/prismarine-bricks-crafting_ytzzsa.png",
    red_nether: "https://res.cloudinary.com/ddnwvsd9o/image/upload/v1688422473/Manufactured/red-nether-brick-crafting_kidgrr.png",
    redstone_block: "https://res.cloudinary.com/ddnwvsd9o/image/upload/v1688422473/Manufactured/redstone-block-crafting_fzovjp.png",
    purpur_stairs: "https://res.cloudinary.com/ddnwvsd9o/image/upload/v1688422473/Manufactured/purpur-stairs-crafting_gpc7wr.png",
    quartz_block: "https://res.cloudinary.com/ddnwvsd9o/image/upload/v1688422473/Manufactured/quartz-block-crafting_leuamh.png",
    purpur_slab: "https://res.cloudinary.com/ddnwvsd9o/image/upload/v1688422473/Manufactured/purpur-slab-crafting_lgiol1.png",
    purpur_pillar: "https://res.cloudinary.com/ddnwvsd9o/image/upload/v1688422473/Manufactured/purpur-pillar-crafting_pgqb5r.png",
    polished_granite: "https://res.cloudinary.com/ddnwvsd9o/image/upload/v1688422473/Manufactured/polished-granite-crafting_dznm8k.png",
    purpur_block: "https://res.cloudinary.com/ddnwvsd9o/image/upload/v1688422473/Manufactured/purpur-block-crafting_x9lt5r.png",
    prismarine_block: "https://res.cloudinary.com/ddnwvsd9o/image/upload/v1688422473/Manufactured/prismarine-crafting_yf26bz.png",
    polished_diorite: "https://res.cloudinary.com/ddnwvsd9o/image/upload/v1688422473/Manufactured/polished-diorite-crafting_uussff.png",
    chiseled_stone_block: "https://res.cloudinary.com/ddnwvsd9o/image/upload/v1688422337/Manufactured/g3vozsrkjd2jeiointy5.png",
    moss_stone: "https://res.cloudinary.com/ddnwvsd9o/image/upload/v1688422252/Manufactured/uhchmfladllq6s3034zu.png",
    magma_block: "https://res.cloudinary.com/ddnwvsd9o/image/upload/v1688422251/Manufactured/lfdvdokvub783q8mtye0.png",
    jack_lantern: "https://res.cloudinary.com/ddnwvsd9o/image/upload/v1688422251/Manufactured/zi1isuibseveqnnmnwrk.png",
    wood_stairs:"https://res.cloudinary.com/ddnwvsd9o/image/upload/v1687837129/c2qsmcikvd4aojzjy6bi.gif",
    tnt:"https://res.cloudinary.com/ddnwvsd9o/image/upload/v1687995895/qcsyg0bbpiaaclxytcrl.png",
    hay_bale: "https://res.cloudinary.com/ddnwvsd9o/image/upload/v1687995896/zi8m5jmw6pnkw8m7ltse.png",
    granite: "https://res.cloudinary.com/ddnwvsd9o/image/upload/v1688422249/Manufactured/drfhdpjryndpefzpimau.png",
    glowstone: "https://res.cloudinary.com/ddnwvsd9o/image/upload/v1688422249/Manufactured/pdpzpxsoddu7va0aqho7.png",
    smooth_sandstone: "https://res.cloudinary.com/ddnwvsd9o/image/upload/v1688422248/Manufactured/j3hhp1dwa9chlxocezgm.png",
    diorite: "https://res.cloudinary.com/ddnwvsd9o/image/upload/v1688422247/Manufactured/rclmsfyg8rcecfh1syyq.png",
    dark_prismarine: "https://res.cloudinary.com/ddnwvsd9o/image/upload/v1688422247/Manufactured/quri39t6nhbbsh9fotzc.png",
    coarse_dirt: "https://res.cloudinary.com/ddnwvsd9o/image/upload/v1688422246/Manufactured/icwjvl5ehhfupurmlmqd.png",
    clay_block: "https://res.cloudinary.com/ddnwvsd9o/image/upload/v1688422245/Manufactured/vhifp6xie2d4thfgz18x.png",
    chiseled_stone_brick: "https://res.cloudinary.com/ddnwvsd9o/image/upload/v1688422245/Manufactured/ku1gwzc94migp5slgc1j.png",
    chiseled_quartz: "https://res.cloudinary.com/ddnwvsd9o/image/upload/v1688422244/Manufactured/hpogrwpfmjivxersinnu.png",
    brick: "https://res.cloudinary.com/ddnwvsd9o/image/upload/v1688422244/Manufactured/uib4ma9scwdnogw3ucep.png",
    book_shelf: "https://res.cloudinary.com/ddnwvsd9o/image/upload/v1688422243/Manufactured/kdavdfrslq1scftd6ngk.png",
    bone_block: "https://res.cloudinary.com/ddnwvsd9o/image/upload/v1688422242/Manufactured/amjgu8x5xgm3qxtik6qy.png",
    coal_block: "https://res.cloudinary.com/ddnwvsd9o/image/upload/v1688422240/Manufactured/kqg7laqm80eithiuddpf.png",
    beacon: "https://res.cloudinary.com/ddnwvsd9o/image/upload/v1688422240/Manufactured/wlmgsquaelxoojkb8mwc.png",
    anvil: "https://res.cloudinary.com/ddnwvsd9o/image/upload/v1688422239/Manufactured/y6jq9vtdjmvtujk6jwkb.png",
    andesite: "https://res.cloudinary.com/ddnwvsd9o/image/upload/v1688422238/Manufactured/cxq20fd7iwe1l76twzmd.png",

    //Transportration (79-87)
    activator_rail: "https://res.cloudinary.com/ddnwvsd9o/image/upload/v1688422816/Transportation/activator-rail-crafting_mtkbbu.png",
    rail: "https://res.cloudinary.com/ddnwvsd9o/image/upload/v1688422816/Transportation/activator-rail-crafting_mtkbbu.png",
    powered_minecart: "https://res.cloudinary.com/ddnwvsd9o/image/upload/v1688422814/Transportation/powered-minecart-crafting_b7xbh1.png",
    tnt_minecart: "https://res.cloudinary.com/ddnwvsd9o/image/upload/v1688422813/Transportation/minecart-with-tnt-crafting_r8zbpz.png",
    hopper_minecart: "https://res.cloudinary.com/ddnwvsd9o/image/upload/v1688422813/Transportation/minecart-with-hopper-crafting_tcrm9z.png",
    chest_minecart: "https://res.cloudinary.com/ddnwvsd9o/image/upload/v1688422813/Transportation/minecart-with-chest-crafting_krum7t.png",
    minecart: "https://res.cloudinary.com/ddnwvsd9o/image/upload/v1688422813/Transportation/minecart-crafting_adtxvt.png",
    detector_rail: "https://res.cloudinary.com/ddnwvsd9o/image/upload/v1688422809/Transportation/detector-rail-crafting_nxhuqh.png",
    boat: "https://res.cloudinary.com/ddnwvsd9o/image/upload/v1688422808/Transportation/boat-crafting_xqnwvh.png",


    //Food (88-101)
    rabbit_stew: "https://res.cloudinary.com/ddnwvsd9o/image/upload/v1688422815/Food/rabbit-stew-crafting_f3lj3k.png",
    pumpkin_seeds: "https://res.cloudinary.com/ddnwvsd9o/image/upload/v1688422815/Food/pumpkin-seeds-crafting_rvyz2r.png",
    pumpkin_pie: "https://res.cloudinary.com/ddnwvsd9o/image/upload/v1688422814/Food/pumpkin-pie-crafting_wlewbg.png",
    mushroom_stew: "https://res.cloudinary.com/ddnwvsd9o/image/upload/v1688422813/Food/mushroom-stew-crafting_ntwqlh.png",
    watermelon_seeds: "https://res.cloudinary.com/ddnwvsd9o/image/upload/v1688422813/Food/melon-seeds-crafting_fhqov0.png",
    watermelon_block: "https://res.cloudinary.com/ddnwvsd9o/image/upload/v1688422813/Food/melon-block-crafting_sbdki2.png",
    golden_carrot: "https://res.cloudinary.com/ddnwvsd9o/image/upload/v1688422811/Food/golden-carrot-crafting_xe6nbv.png",
    golden_apple: "https://res.cloudinary.com/ddnwvsd9o/image/upload/v1688422811/Food/golden-apple-crafting_qqf0ol.png",
    enchanted_golden_apple: "https://res.cloudinary.com/ddnwvsd9o/image/upload/v1688422809/Food/enchanted-golden-apple-crafting_vkbzi7.png",
    cookie: "https://res.cloudinary.com/ddnwvsd9o/image/upload/v1688422809/Food/cookie-crafting_hdhaum.png",
    cake: "https://res.cloudinary.com/ddnwvsd9o/image/upload/v1688422808/Food/cake-crafting_rbz74n.png",
    bread: "https://res.cloudinary.com/ddnwvsd9o/image/upload/v1688422808/Food/bread-crafting_yjxdhz.png",
    bowl: "https://res.cloudinary.com/ddnwvsd9o/image/upload/v1688422808/Food/bowl-crafting_weu3qh.png",
    beetroot_soup: "https://res.cloudinary.com/ddnwvsd9o/image/upload/v1688422808/Food/beetroot-soup-crafting_aoqhnn.png",


    //Mechanism (102-120)
    weighted_pressure_plate: "https://res.cloudinary.com/ddnwvsd9o/image/upload/v1688422816/Mechanism/weighted-pressure-plates-crafting_zbh8xe.gif",
    trapdoor: "https://res.cloudinary.com/ddnwvsd9o/image/upload/v1688422816/Mechanism/trapdoor-crafting_jrlime.png",
    tripwire: "https://res.cloudinary.com/ddnwvsd9o/image/upload/v1688422816/Mechanism/tripwire-hook-crafting_qcwkmr.png",
    trapped_chest: "https://res.cloudinary.com/ddnwvsd9o/image/upload/v1688422816/Mechanism/trapped-chest-crafting_u3lxj7.png",
    redstone_torch: "https://res.cloudinary.com/ddnwvsd9o/image/upload/v1688422815/Mechanism/redstone-torch-crafting_kqadzm.png",
    redstone_comparator: "https://res.cloudinary.com/ddnwvsd9o/image/upload/v1688422815/Mechanism/redstone-comparator-crafting_sxz9m3.png",
    redstone_repeater: "https://res.cloudinary.com/ddnwvsd9o/image/upload/v1688422815/Mechanism/redstone-repeater-crafting_qe2efs.png",
    redstone_lamp: "https://res.cloudinary.com/ddnwvsd9o/image/upload/v1688422815/Mechanism/redstone-lamp-crafting_gf6zsm.png",
    piston: "https://res.cloudinary.com/ddnwvsd9o/image/upload/v1688422814/Mechanism/piston-crafting_lclfqz.png",
    note: "https://res.cloudinary.com/ddnwvsd9o/image/upload/v1688422814/Mechanism/note-block-crafting_zgtspg.png",
    iron_block: "https://res.cloudinary.com/ddnwvsd9o/image/upload/v1688422813/Mechanism/mineral-block-crafting_rrpyf1.gif",
    lever: "https://res.cloudinary.com/ddnwvsd9o/image/upload/v1688422812/Mechanism/lever-crafting_i2hgvk.png",
    iron_trapdoor: "https://res.cloudinary.com/ddnwvsd9o/image/upload/v1688422812/Mechanism/iron-trapdoor-crafting_vz40dj.png",
    jukebox: "https://res.cloudinary.com/ddnwvsd9o/image/upload/v1688422812/Mechanism/jukebox-crafting_m2af9m.png",
    hopper: "https://res.cloudinary.com/ddnwvsd9o/image/upload/v1688422811/Mechanism/hopper-crafting_q3mjpz.png",
    door: "https://res.cloudinary.com/ddnwvsd9o/image/upload/v1688422809/Mechanism/doors-crafting_mmhy9j.gif",
    dropper: "https://res.cloudinary.com/ddnwvsd9o/image/upload/v1688422809/Mechanism/dropper-crafting_avh9me.png",
    dispenser: "https://res.cloudinary.com/ddnwvsd9o/image/upload/v1688422809/Mechanism/dispenser-crafting_zamzkd.png",
    daylight_sensor: "https://res.cloudinary.com/ddnwvsd9o/image/upload/v1688422809/Mechanism/daylight-sensor-crafting_qsdiqa.png",

    //Enchantment & Brewing (121-128)
    magma_cream: "https://res.cloudinary.com/ddnwvsd9o/image/upload/v1688422813/Enchantment/magma-cream-crafting_t8edku.png",
    gold_nugget: "https://res.cloudinary.com/ddnwvsd9o/image/upload/v1688422811/Enchantment/gold-nugget-crafting_blyjfd.png",
    golden_watermelon: "https://res.cloudinary.com/ddnwvsd9o/image/upload/v1688422811/Enchantment/glistering-melon-crafting_vvibpr.png",
    fermented_spidereye: "https://res.cloudinary.com/ddnwvsd9o/image/upload/v1688422810/Enchantment/fermented-spider-eye-crafting_edzl3h.png",
    enchanting_table: "https://res.cloudinary.com/ddnwvsd9o/image/upload/v1688422809/Enchantment/enchantment-table-crafting_si8bb9.png",
    cauldron: "https://res.cloudinary.com/ddnwvsd9o/image/upload/v1688422809/Enchantment/cauldron-crafting_so1zqg.png",
    brewing_stand: "https://res.cloudinary.com/ddnwvsd9o/image/upload/v1688422808/Enchantment/brewing-stand-crafting_ajea0z.png",
    blaze_powder: "https://res.cloudinary.com/ddnwvsd9o/image/upload/v1688422808/Enchantment/blaze-powder-crafting_wn1zzx.png",


    //Wool (129-143)
    yellow_wool: "https://res.cloudinary.com/ddnwvsd9o/image/upload/v1688422816/Wool/yellow-wool-crafting_wojzb6.png",
    wool: "https://res.cloudinary.com/ddnwvsd9o/image/upload/v1688422816/Wool/wool-crafting_rplw9z.png",
    red_wool: "https://res.cloudinary.com/ddnwvsd9o/image/upload/v1688422815/Wool/red-wool-crafting_eppmoc.png",
    purple_wool: "https://res.cloudinary.com/ddnwvsd9o/image/upload/v1688422815/Wool/purple-wool-crafting_zd4rbq.png",
    pink_wool: "https://res.cloudinary.com/ddnwvsd9o/image/upload/v1688422814/Wool/pink-wool-crafting_e4vchd.png",
    orange_wool: "https://res.cloudinary.com/ddnwvsd9o/image/upload/v1688422814/Wool/orange-wool-crafting_lemhkl.png",
    magenta_wool: "https://res.cloudinary.com/ddnwvsd9o/image/upload/v1688422813/Wool/magenta-wool-crafting_bzsol1.png",
    lime_wool: "https://res.cloudinary.com/ddnwvsd9o/image/upload/v1688422813/Wool/lime-wool-crafting_bulssw.png",
    light_gray_wool: "https://res.cloudinary.com/ddnwvsd9o/image/upload/v1688422812/Wool/light-gray-wool-crafting_ygs2ei.png",
    light_blue_wool: "https://res.cloudinary.com/ddnwvsd9o/image/upload/v1688422812/Wool/light-blue-wool-crafting_sosdo7.png",
    green_wool: "https://res.cloudinary.com/ddnwvsd9o/image/upload/v1688422811/Wool/green-wool-crafting_edovpw.png",
    gray_wool: "https://res.cloudinary.com/ddnwvsd9o/image/upload/v1688422811/Wool/gray-wool-crafting_cxpehm.png",
    cyan_wool: "https://res.cloudinary.com/ddnwvsd9o/image/upload/v1688422809/Wool/cyan-wool-crafting_pvmmoz.png",
    brown_wool: "https://res.cloudinary.com/ddnwvsd9o/image/upload/v1688422808/Wool/brown-wool-crafting_lmcufu.png",
    blue_wool: "https://res.cloudinary.com/ddnwvsd9o/image/upload/v1688422808/Wool/blue-wool-crafting_p89u6b.png",

    //Dye (144-154)
    red: "https://res.cloudinary.com/ddnwvsd9o/image/upload/v1688422815/Dye/rose-red-dye-crafting_c3nmux.png",
    purple: "https://res.cloudinary.com/ddnwvsd9o/image/upload/v1688422815/Dye/purple-dye-crafting_lv1c6k.png",
    pink: "https://res.cloudinary.com/ddnwvsd9o/image/upload/v1688422814/Dye/pink-dye-crafting_jbyp73.png",
    orange: "https://res.cloudinary.com/ddnwvsd9o/image/upload/v1688422814/Dye/orange-dye-crafting_w2nlii.png",
    magenta: "https://res.cloudinary.com/ddnwvsd9o/image/upload/v1688422813/Dye/magenta-dye-crafting_voh735.png",
    light_gray: "https://res.cloudinary.com/ddnwvsd9o/image/upload/v1688422812/Dye/light-gray-dye-crafting_cc7wps.png",
    lime: "https://res.cloudinary.com/ddnwvsd9o/image/upload/v1688422812/Dye/lime-dye-crafting_pjdrth.png",
    light_blue: "https://res.cloudinary.com/ddnwvsd9o/image/upload/v1688422812/Dye/light-blue-dye-crafting_vnnib6.png",
    gray: "https://res.cloudinary.com/ddnwvsd9o/image/upload/v1688422811/Dye/gray-dye-crafting_gg4hfn.png",
    yellow: "https://res.cloudinary.com/ddnwvsd9o/image/upload/v1688422809/Dye/dandelion-yellow-dye-crafting_zekspj.png",
    cyan: "https://res.cloudinary.com/ddnwvsd9o/image/upload/v1688422809/Dye/cyan-dye-crafting_sgydld.png",

    //Misc (155-175)
    carpet:"https://res.cloudinary.com/ddnwvsd9o/image/upload/v1687996082/q8upvzejqvuzkqtxhvlk.gif",
    banner: "https://res.cloudinary.com/ddnwvsd9o/image/upload/v1688422816/Misc/banner-crafting_w5fjmy.gif",
    bed: "https://res.cloudinary.com/ddnwvsd9o/image/upload/v1688422816/Misc/bed-crafting_ubge02.png",
    armor_stand: "https://res.cloudinary.com/ddnwvsd9o/image/upload/v1688422816/Misc/armor-stand-crafting_lkkktr.png",
    stained_glass: "https://res.cloudinary.com/ddnwvsd9o/image/upload/v1688422815/Misc/stained-glass-crafting_etfgee.gif",
    sign: "https://res.cloudinary.com/ddnwvsd9o/image/upload/v1688422815/Misc/sign-crafting_b9dvxb.png",
    painting: "https://res.cloudinary.com/ddnwvsd9o/image/upload/v1688422814/Misc/painting-crafting_cdwhgo.png",
    nether_fence: "https://res.cloudinary.com/ddnwvsd9o/image/upload/v1688422814/Misc/nether-brick-fence-crafting_ouhg7f.png",
    leather: "https://res.cloudinary.com/ddnwvsd9o/image/upload/v1688422812/Misc/leather-crafting_lxjxrs.png",
    lead: "https://res.cloudinary.com/ddnwvsd9o/image/upload/v1688422812/Misc/lead-crafting_tryila.png",
    frame: "https://res.cloudinary.com/ddnwvsd9o/image/upload/v1688422812/Misc/item-frame-crafting_s9k2fb.png",
    glass_pane: "https://res.cloudinary.com/ddnwvsd9o/image/upload/v1688422811/Misc/glass-pane-crafting_ewmmen.gif",
    firework: "https://res.cloudinary.com/ddnwvsd9o/image/upload/v1688422810/Misc/firework-rocket-crafting_bdvqqy.gif",
    flower_pot: "https://res.cloudinary.com/ddnwvsd9o/image/upload/v1688422810/Misc/flower-pot-crafting_v5rqbf.png",
    fire_charge: "https://res.cloudinary.com/ddnwvsd9o/image/upload/v1688422810/Misc/fire-charge-crafting_nz7cts.png",
    fence: "https://res.cloudinary.com/ddnwvsd9o/image/upload/v1688422810/Misc/fence-crafting_ujzain.gif",
    gate: "https://res.cloudinary.com/ddnwvsd9o/image/upload/v1688422810/Misc/fence-gate-crafting_j9uhyk.png",
    end_rod: "https://res.cloudinary.com/ddnwvsd9o/image/upload/v1688422810/Misc/end-rod-crafting_pefgh3.png",
    ender_chest: "https://res.cloudinary.com/ddnwvsd9o/image/upload/v1688422810/Misc/ender-chest-crafting_a11edf.png",
    booK: "https://res.cloudinary.com/ddnwvsd9o/image/upload/v1688422808/Misc/book-crafting_j0vlou.png",
    book_quil: "https://res.cloudinary.com/ddnwvsd9o/image/upload/v1688422808/Misc/book-and-quill-crafting_nt0odo.png",
   
};

module.exports = itemImageMap;