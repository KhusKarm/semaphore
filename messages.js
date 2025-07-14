const shortMessages = [
  
     "DTG 281200 DU ROUTINE DU FROM NCC BHOPAL TO NCC PUNE DU UNCLASS INFO HQ JK BT Final relay test begins 1400 hrs involving Alpha, Bravo, and Charlie teams. Use encrypted radios, confirm check-in every 15 mins. Terrain shifts expected. Backup relay active. Response logs to be submitted post drill AAA BT AR"
  ,
  
     "DTG 271130 DU FLASH DU FROM SHIP INS VIKRANT TO NAVAL HQ DU SECRET INFO MARITIME OPS BT Beacon test begins 1130 hrs. All hands monitor VHF Channel Bravo. Confirm signal lock, relay strength, and response delay. Simulate real emergency broadcast. Maintain log. Forward findings by 1800 hrs to comms division for review AAA BT AR"
  ,
  
     "DTG 261500 DU OPPS IMMDT DU FROM PRINCIPAL KVS-14 TO REGIONAL EDUCATION BOARD DU RESTD INFO ZONAL HQ BT Emergency drill begins 1500 hrs sharp. Simulate lockdown using PA system and classroom radios. All staff participate. Log time to respond. Escalate any non-functioning nodes. Completion report due before 1630 hrs today without delay AAA BT AR"
  ,
  
     "DTG 251700 DU P DU FROM CO 17 GUARDS TO HQ INF BDE DU TOP SECRET INFO BRAVO UNIT BT Orders revised. Charlie Company to report to Grid Zulu-8 by 0500 hrs. Maintain strict radio silence. Use burst transmission only. Confirm arrival with coded pings every 20 mins. Report mission status by 0700 AAA BT AR"
  ,

  "DTG 081200 DU ROUTINE DU FROM INSTRUCTOR VIKAS TO CADET ARYAN DU UNCLASS INFO NAVY KNOWLEDGE CELL BT The Shivalik-class stealth frigates include INS Shivalik, INS Satpura, and INS Sahyadri. These were developed under Project 17 and represent India’s first indigenously built stealth multi-role warships. They serve across both Western and Eastern naval fleets in front-line duties AAA BT AR"
  ,
  
     "DTG 241830 DU R DU FROM AIRBASE NAGPUR TO IAF HQ DU CONFD INFO COMMS CONTROL BT Blackout exercise begins 1830 hrs. Comms blackout to last 45 mins. Tower staff monitor backup systems. Note anomalies. Reconnect manually if primary fails. Do not relay external signals until clearance given by Command. Prepare final report AAA BT AR"
  ,
  
     "DTG 231600 DU F DU FROM EMPLOYEE-0089 TO HR SECURITY DESK DU UNCLASS INFO ADMIN HQ BT Server maintenance drill starts 1600 hrs. All systems will go offline. Simulate cyber breach recovery using offline protocols. Track all login events. Alert escalation required on any data breach detection. Report anomalies to supervisor within one hour AAA BT AR"
  ,
  
     "DTG 221400 DU PRIORITY DU FROM INSV KALINGA TO COAST GUARD HQ DU SECRET INFO SOUTHCOM BT Sector Echo-2 experiencing frequency overlap. Redirect traffic via Channel 34-B. Suspend broadcasts on compromised band. Conduct diagnostic sweep. Log abnormal pings. Issue clearance to resume normal ops only after final confirmation from central station control team AAA BT AR"
  ,
  
     "DTG 211100 DU ROUTINE DU FROM DEPUTY COMMISSIONER TO DISTRICT HQ DU UNCLASS INFO STATE OPS ROOM BT Monthly radio test begins 1100 hrs. Send mock alert to five zones. Confirm relay to each receiver. Note timestamp of reply. Delays over 30 seconds flagged. Full relay log to be uploaded to operations dashboard by 1200 AAA BT AR"
  ,
  
     "DTG 201530 DU P DU FROM BATTALION 14 SIKH TO BRIGADE HQ DU RESTD INFO QRT COMMAND BT Ammo transport begins 1800 hrs. Vehicles equipped with silent comms. Status ping every 30 mins. Maintain route discipline. If deviated, trigger emergency protocol. Use GPS logs for route tracking. Final confirmation required at base checkpoint Alpha AAA BT AR"
  ,
  
     "DTG 191200 DU O DU FROM SHIP MV PARAMOUNT TO PORT NAVIGATION TOWER DU CONFD INFO MARINE TRAFFIC HQ BT AIS tracking begins 1930 hrs. Monitor channel sync with towers Alpha, Bravo. Confirm ID verification and ship class. Sync GPS coordinates. Resolve mismatches immediately. Send sync results to harbor authority by 2030 hrs AAA BT AR"
  ,

  "DTG 181700 DU ROUTINE DU FROM INSTRUCTOR RAGHAV TO CADET ANIRUDH DU UNCLASS INFO NAVAL TRAINING HQ BT INS Vikrant is classified under Vikrant-class aircraft carriers. It is India’s first indigenously built carrier under Project 71. Remember its max displacement is around 45,000 tons and operational aircraft includes MiG-29K and helicopters for fleet defense AAA BT AR",

  "DTG 171630 DU FLASH DU FROM INSTRUCTOR MEENA TO CADET PRITHVI DU UNCLASS INFO SHIP SYSTEMS GROUP BT INS Arihant belongs to the Arihant-class SSBNs under the Advanced Technology Vessel (ATV) project. It is nuclear-powered and capable of carrying K-15 and K-4 SLBMs. First vessel to complete India's nuclear triad in strategic deterrence AAA BT AR",

  "DTG 061600 DU ROUTINE DU FROM INSTRUCTOR ARUN TO CADET LAVANYA DU UNCLASS INFO PROJECT IDENT TEAM BT Nilgiri-class frigates under Project 17A include INS Nilgiri, Himgiri, Udaygiri, Dunagiri, Taragiri, and Vindhyagiri. These advanced stealth frigates follow modular construction and integrated mast sensor design. They are successors to the Shivalik-class and are currently under phased induction AAA BT AR",

  "DTG 161400 DU ROUTINE DU FROM INSTRUCTOR SHIV TO CADET RADHA DU UNCLASS INFO WEST COAST BATCH BT INS Shivalik is lead ship of Shivalik-class stealth frigates, part of Project 17. Designed with stealth features and armed with Barak-1, Klub missiles. Launched in 2004, it represents multi-role capability for anti-air, anti-submarine, and anti-surface warfare AAA BT AR",

  "DTG 151300 DU PRIORITY DU FROM INSTRUCTOR DEEPTI TO CADET ARUN DU UNCLASS INFO MARINE SYSTEMS SCHOOL BT INS Kolkata is a destroyer of the Kolkata-class under Project 15A. It displaces 7,400 tons and is equipped with BrahMos missiles and MF-STAR radar. Remember it replaced Rajput-class destroyers as part of modernization effort AAA BT AR",

  "DTG 141100 DU OPPS IMMDT DU FROM INSTRUCTOR TANU TO CADET VIKAS DU UNCLASS INFO EASTERN DOCKYARD BT INS Kamorta is part of the Kamorta-class ASW corvettes from Project 28. Built with a high level of indigenous content. Features low radar signature and hull-mounted sonar systems. Operates primarily in anti-submarine roles in coastal zones AAA BT AR",

  "DTG 131800 DU FLASH DU FROM INSTRUCTOR VIKRAM TO CADET SHIVAM DU UNCLASS INFO PROJECT IDENTIFICATION CELL BT INS Satpura is a stealth multi-role frigate under Shivalik-class. Commissioned in 2011, its design allows low infrared and radar signatures. Carries advanced weapons and sensors for wide combat flexibility. Belongs to the Indian Navy’s Eastern Fleet AAA BT AR",

  "DTG 121730 DU F DU FROM INSTRUCTOR KANIKA TO CADET NIKHIL DU UNCLASS INFO NAVCOM BATCH DELTA BT INS Talwar is from Talwar-class frigates, modified Krivak III class. Built in Russia under Project 11356. Operates with Club-N missile system and Shtil-1 SAM. Used extensively for fleet air defense and escort missions in Arabian Sea AAA BT AR",

  "DTG 111600 DU ROUTINE DU FROM INSTRUCTOR RAVI TO CADET NEERAJ DU UNCLASS INFO SHIP DESIGN DIVISION BT INS Chakra is an Akula-class nuclear-powered attack submarine leased from Russia. Not part of Project 75I but serves as training platform. Capable of deep strike, stealth operations, and long endurance undersea patrols in strategic roles AAA BT AR",

  "DTG 101500 DU P DU FROM INSTRUCTOR ANJALI TO CADET RITU DU UNCLASS INFO WESTERN COMMAND BT INS Kavaratti is the last of Kamorta-class ASW corvettes under Project 28. Made with carbon fiber composite superstructure for strength and stealth. Equipped with advanced torpedo tubes, RBU-6000 launcher, and indigenous combat systems for ASW operations AAA BT AR",

  "DTG 091330 DU ROUTINE DU FROM INSTRUCTOR SANJAY TO CADET AYAAN DU UNCLASS INFO NAVAL LEARNING HQ BT INS Nilgiri is the first of the new Nilgiri-class frigates under Project 17A. Advanced stealth and modular construction. Equipped with BrahMos, Barak-8, and integrated mast sensors. Will replace earlier generation Leander-class vessels in Indian Navy AAA BT AR"
,
"DTG 041200 DU R DU FROM INSTRUCTOR DEEPAK TO CADET AKSHAY DU UNCLASS INFO WEST COAST BATCH BT The Kamorta-class anti-submarine warfare corvettes under Project 28 include INS Kamorta, Kadmatt, Kiltan, and Kavaratti. These are stealth corvettes designed for ASW roles, with low acoustic signature, and high indigenous content. Operate primarily in Eastern Naval Command zones AAA BT AR"
,
"DTG 031700 DU ROUTINE DU FROM INSTRUCTOR JAYA TO CADET TANMAY DU UNCLASS INFO EASTERN NAVAL SCHOOL BT The Khukri-class corvettes include INS Khukri, INS Kirpan, INS Kuthar, and INS Khanjar. These vessels were designed for patrol and minor surface engagement duties. Most served the Indian Navy from early 1990s till recent decommissioning; Khukri was gifted to Vietnam AAA BT AR"
,
"DTG 291200 DU P DU FROM INSTRUCTOR SHREYA TO CADET YUG DU UNCLASS INFO INDIAN NAVY BATCH BT The Brahmaputra-class frigates include INS Brahmaputra, INS Betwa, and INS Beas. These follow the Godavari-class and were indigenously developed. Equipped with medium-range SAMs, torpedoes, and 76 mm main guns. Served in anti-piracy, escort, and surface combat roles AAA BT AR"
];

