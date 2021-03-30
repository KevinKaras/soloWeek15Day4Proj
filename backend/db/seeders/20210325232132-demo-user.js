'use strict';
const faker = require('faker');
const bcrypt = require('bcryptjs');


module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      email: 'Van_Dibbert@hotmail.com',
      username: 'Katherine_Muller',
      hashedPassword: '$2a$10$oge0Cse3k32bxV8YgmXwUuORJoxSUOQT.VzfQLFZ68pro5Z4XrPuW'
    } ,
    {
      email: 'Camron8@hotmail.com',
      username: 'Viviane5',
      hashedPassword: '$2a$10$o3mH34sfhPtkNqJXmjHsveYz3EefA5Y4zkRss4lZLMljHhMbCTdwO'
    } ,
    {
      email: 'Zella48@gmail.com',
      username: 'Orpha_Wilderman84',
      hashedPassword: '$2a$10$wGHJbp/l2QoSmLj3IFHyF.UVoAsomIaU/m2/.5BxHn.Hq4nzIeDX.'
    } ,
    {
      email: 'Davonte28@hotmail.com',
      username: 'Rhiannon58',
      hashedPassword: '$2a$10$xb08xDYLy9Q.t2Q9d8zw0e0NEToekSdC0cU0H.AlvWY8kHYXUHAW6'
    } ,
    {
      email: 'Aisha89@gmail.com',
      username: 'Celestine.Metz',
      hashedPassword: '$2a$10$sGL.y7aI.xZEW0MIZ.xB8uwpbHDblqs3XkIEJJb2ZPjKKVsf/Uhse'
    } ,
    {
      email: 'Lloyd80@yahoo.com',
      username: 'Daisha.Stroman',
      hashedPassword: '$2a$10$GtEbVYjXNKWix6J/nC/pse.oRGWL8ZL2Q7kjOknriPaEAhiwuk6wi'
    } ,
    {
      email: 'Coralie_Krajcik@hotmail.com',
      username: 'Stephany_Boyle',
      hashedPassword: '$2a$10$mQzTz5ZvARtoLwAAzn2SBOXEQEWNKBrnSaKwlYsTktxF2q8DOpuXy'
    } ,
    {
      email: 'Clinton.DuBuque@yahoo.com',
      username: 'Nathanael_Beer',
      hashedPassword: '$2a$10$1HpVQubdLgzUlplejOCVZ.wuTOTugEkhLPCtOoOwi7VBjunxf6PLK'
    } ,
    {
      email: 'Heidi51@yahoo.com',
      username: 'Chase92',
      hashedPassword: '$2a$10$Whag8GcLLD/fiRRum94UBOONoAhhZC6otlsW3JeaN.MJ4FNOlvtsG'
    } ,
    {
      email: 'Ricky_Waelchi82@gmail.com',
      username: 'Garnett.Spinka',
      hashedPassword: '$2a$10$06ZlQQ0KBImcj0ar6dC6o.VGcgFXHdDq88q/8KoRJK6NuSoK6eKjK'
    } ,
    {
      email: 'Trey87@hotmail.com',
      username: 'Tyra97',
      hashedPassword: '$2a$10$P/vFxDlch96srlhXJARu9OszAvHFCbf5pMFGMP7mNCx/2qN968n8K'
    } ,
    {
      email: 'Lucy_Hegmann3@yahoo.com',
      username: 'Eleanore.Schimmel',
      hashedPassword: '$2a$10$AapYIQh3PbA7.yxVUOhKceq9U.ivVSCVcLqKUhD6BRkxjABl8tAoy'
    } ,
    {
      email: 'Jenifer_Jacobi45@yahoo.com',
      username: 'Annamarie_Morissette41',
      hashedPassword: '$2a$10$HCkXOVGIgJLcAv/ME30XqeeAl2BaolEjL3R8EwsY9M8tQOP.p/JzW'
    } ,
    {
      email: 'Shane_Heaney@hotmail.com',
      username: 'Antonia.Jones6',
      hashedPassword: '$2a$10$cS3pLUxjGWPpHm5fc..ouOklyxL7HUUVHJJ7exC7I33LxnM7KUzMG'
    } ,
    {
      email: 'Major_Okuneva@gmail.com',
      username: 'Chanel93',
      hashedPassword: '$2a$10$RQEvjxnQiWz13f7GkcHYSODZfjy/vNkVLEJOaV18ivCKkbrT9W8mi'
    } ,
    {
      email: 'Hans.Braun92@hotmail.com',
      username: 'Josephine19',
      hashedPassword: '$2a$10$2I/w1a2gfJPCNWAe9KlmA.3vmDTOSsdAAJCzLPgoEWmo42W93Dbci'
    } ,
    {
      email: 'Dorothea94@gmail.com',
      username: 'Friedrich_Balistreri11',
      hashedPassword: '$2a$10$06Eo63jUKaECCWCRNkmP6ecGQ8.YawZMGSr.Llc89CviASIaJ8DvG'
    } ,
    {
      email: 'Blaze_Wyman6@yahoo.com',
      username: 'Minnie.Treutel',
      hashedPassword: '$2a$10$kdF/UTOfwc2L6CrERkHXaOToQiEzTWoHvk9hNOXAK1HNlMlAN/fX6'
    } ,
    {
      email: 'Kailyn74@gmail.com',
      username: 'Bethany_Zemlak',
      hashedPassword: '$2a$10$A3BqaSloDls5ostSX.TzDur.eQtBD6lo13MtSnFrrq6vL8DuNxlhu'
    } ,
    {
      email: 'Justice.Rutherford@gmail.com',
      username: 'Joanie_Schimmel',
      hashedPassword: '$2a$10$1iJFxn3eQzML9lfKwdT6o.dZUWuyiyowTIY2fA12v5oba.g6qYpJu'
    } ,
    {
      email: 'Crystel_Zieme@yahoo.com',
      username: 'Enola_McGlynn64',
      hashedPassword: '$2a$10$4AqIdEaS19vAWmtaRKHGpOVwkF6.WRk4LwfNbHGc4RgqCfhKN6mcO'
    } ,
    {
      email: 'Taylor.Waters45@gmail.com',
      username: 'Rita.Sauer34',
      hashedPassword: '$2a$10$b4uUEeKQ63dQxefwwiK6w.DNfa0NQi.Cubbcjobj9fonB6QS/JyJu'
    } ,
    {
      email: 'Justina_Torp@gmail.com',
      username: 'Kurtis_Schaefer',
      hashedPassword: '$2a$10$e8dWh2fFmykIYsdX9OCV9Orfa86tPhQq6IGKjIHlXYQXGJ9clAPOa'
    } ,
    {
      email: 'Miracle.Torp@gmail.com',
      username: 'Adella33',
      hashedPassword: '$2a$10$NR.jIUWfThK14WNL2RArOe9GC/V3B8RmFoBieGvynQ7iIPJ8HRwSC'
    } ,
    {
      email: 'Neal_Little@hotmail.com',
      username: 'Maia11',
      hashedPassword: '$2a$10$tPLfBcAsoVvyFARV79WXJuJy7v2Q.zaCuwzvgtE1/NJs.ndwhVm9G'
    } ,
    {
      email: 'Velma_Dibbert35@hotmail.com',
      username: 'Barbara.Kovacek86',
      hashedPassword: '$2a$10$UOIYQav.eQfju6qrOE9Mx..9gp2kOojxfV0oqhXPglefLyVFglmDu'
    } ,
    {
      email: 'Guadalupe.Durgan@hotmail.com',
      username: 'Mina.Cole',
      hashedPassword: '$2a$10$HzytTThS8A7QlZQdL4Mw7usD8zbLioQGYcMOkwZK46MXMDXPQ5gxa'
    } ,
    {
      email: 'Griffin19@yahoo.com',
      username: 'Jaiden_Bernhard',
      hashedPassword: '$2a$10$dDwC9MgEby7Avh0j1wQ5/OVJdryms5cl3oLht3Z1y4d3xbNVkDj1q'
    } ,
    {
      email: 'Jolie35@hotmail.com',
      username: 'Moses84',
      hashedPassword: '$2a$10$myEQo54IwrOXhHcsmkRda.Hg4MJW/BmriFi8EDQlxKUSD.Y8jqfdi'
    } ,
    {
      email: 'Frederick.Brakus@gmail.com',
      username: 'Bernie88',
      hashedPassword: '$2a$10$/KovIoubePgK.c24rlhXXel7A/XL8e11wteoHjZhvYztBeKwr1y9i'
    } ,
    {
      email: 'Frederique_Wolf61@gmail.com',
      username: 'Fritz.Labadie14',
      hashedPassword: '$2a$10$Nx1w6cQLf6EeTaULt8HPO.upg8nMz2Rol8.UagmWW352leGQAGQue'
    } ,
    {
      email: 'Ettie52@yahoo.com',
      username: 'Theresia18',
      hashedPassword: '$2a$10$OKZrzi4EOR1at6kARADjlOUXsnSE5mWTQp27HWORYNUVzuCH7BZm6'
    } ,
    {
      email: 'Gillian51@gmail.com',
      username: 'Aryanna_Berge',
      hashedPassword: '$2a$10$KLyAdLGf33tDtoy5qtYCpOEjHzZHorYM5IckeZkzy7Dv5tSqxkqP.'
    } ,
    {
      email: 'Ezequiel.Corwin62@hotmail.com',
      username: 'Jarred_Murazik',
      hashedPassword: '$2a$10$oURS4PD5Eg2d14/7YK/1V.ADD3wzgrBA6U4P.JOhQSi.6mn1g0O3y'
    } ,
    {
      email: 'Jaquan19@hotmail.com',
      username: 'Jocelyn.Runolfsdottir',
      hashedPassword: '$2a$10$md6mpCpRf3nWoI2BPNn2KeSbDMVds7VuQ1rbPqW4Zg/C2ezKbjp8m'
    } ,
    {
      email: 'Philip_Herzog@hotmail.com',
      username: 'Carroll.Kreiger',
      hashedPassword: '$2a$10$TJv.FuF.LWIgBhLxWSmqU.8eshdobEo.bVIVMICcj1c81KFrLDtsC'
    } ,
    {
      email: 'John.Simonis52@gmail.com',
      username: 'Kaelyn_Frami62',
      hashedPassword: '$2a$10$0hKaAR/IEwVgc3vGa460oOPNAuROfBmFw0os/wYytcFtFSbUccXfm'
    } ,
    {
      email: 'Desiree_Bergstrom@gmail.com',
      username: 'Donnie.Rodriguez28',
      hashedPassword: '$2a$10$5U2fPKBX7OO9nxW97AE1b.8qljPWaxcqcz/2B7oyMjdDyfRsNlF.y'
    } ,
    {
      email: 'Jordon.Harber@hotmail.com',
      username: 'Wayne.Mueller',
      hashedPassword: '$2a$10$W4.g63uMsdTkKAu9lRm4aOjOJ90nkIsKLrPeH7A9NZBZ3TqqaZXvS'
    } ,
    {
      email: 'Ena.Lebsack@hotmail.com',
      username: 'Wilber.Prohaska86',
      hashedPassword: '$2a$10$tQ/DmQ1.JInSOfWK21aSdevGe6gRFNxgyQedYFPo8V0Eq6Z0qcv8K'
    } ,
    {
      email: 'Cassandra.Greenholt@gmail.com',
      username: 'Valentin.Maggio',
      hashedPassword: '$2a$10$dnMUcmdZLHETBOelnyPskuR6GGjfaFKkGGc2KzutXBeszXrns.TEW'
    } ,
    {
      email: 'Ella40@hotmail.com',
      username: 'Estevan.Kling16',
      hashedPassword: '$2a$10$w.PmytRhcNWkmlQECMJ3.ejiXpbwxlfWNSdR2TqK5CBDpOoWlKDAi'
    } ,
    {
      email: 'Carson.Swift@gmail.com',
      username: 'Laisha_Barton74',
      hashedPassword: '$2a$10$l6Uxq6ldCRWY25GUSzc6heToSXPIy0UCEwXDl/s9S8ezwkDUfwrlW'
    } ,
    {
      email: 'Charlie45@yahoo.com',
      username: 'Lucious12',
      hashedPassword: '$2a$10$N2.i7WWmPG5UFczY7QjCceihbfRbNYxugMNwI.0eFRecjjyjQJ6ie'
    } ,
    {
      email: 'Louisa76@gmail.com',
      username: 'Isidro.Pouros',
      hashedPassword: '$2a$10$KfRCd2PD3MAzktnUbFeRcO4G0BAjVEigXqyw9rDFA2lVreYW5KmRC'
    } ,
    {
      email: 'Jaron31@gmail.com',
      username: 'Jayce.Heller99',
      hashedPassword: '$2a$10$9rmC9AIrB/ZemKPEUXbtGOxOf0ekUMsXnY/ArNF4LNQGL8zK9po4C'
    } ,
    {
      email: 'Roma47@gmail.com',
      username: 'Lilyan_Conroy9',
      hashedPassword: '$2a$10$UtfodLBl37yVHKELVgERDuojx6IvSr1UKYz3J57hwpb/OmguGfeuu'
    } ,
    {
      email: 'Jaquelin.Abernathy@gmail.com',
      username: 'Nicole.Cronin',
      hashedPassword: '$2a$10$96xgPQCQHL3F6PGjLNUfSO/uJYAdS22U.3g51jYCQOi8ILGhHwDVG'
    } ,
    {
      email: 'Adah.Fahey66@gmail.com',
      username: 'Madisyn47',
      hashedPassword: '$2a$10$ScoAJ.EdQRvaH/TIPvL0xelhq83nZhi09yzbpwg2LmOk7FLvXELvi'
    } ,
    {
      email: 'Hilario_OConner94@hotmail.com',
      username: 'Edna.Kuhic7',
      hashedPassword: '$2a$10$tcS9MHaxAhAvNsyjw20XM.f8mjE1n7e1jtKm38s.lzB2xB4qVZd6q'
    } ,
    {
      email: 'Trystan_Olson@hotmail.com',
      username: 'Gunnar_Johns80',
      hashedPassword: '$2a$10$SERh34oBuk4.hSQQHtKF2.gE3CUPw5UD/IlmO55PbKmX9BBaAsaWm'
    } ,
    {
      email: 'Graciela.Jenkins@gmail.com',
      username: 'Misael_Cremin',
      hashedPassword: '$2a$10$KzA/e4.OJ0DHHhIy0GJEaehopNtbr4paqHj2I.PSDx/ayO0cygGIa'
    } ,
    {
      email: 'Sean8@gmail.com',
      username: 'Furman.Kshlerin96',
      hashedPassword: '$2a$10$pWQVr1TSM64QeJpvNiujEOBaj8mZd8iW/hZjwEHh8aSGza.lddRnC'
    } ,
    {
      email: 'Nadia_Sawayn95@hotmail.com',
      username: 'Shana.Langosh32',
      hashedPassword: '$2a$10$mIYTYWqXd9zYrnv6qNG2t..XX0dBg3V5Xz4sexRSiJrP11srcqF/O'
    } ,
    {
      email: 'Brendan20@hotmail.com',
      username: 'Alia.Schuster75',
      hashedPassword: '$2a$10$9Iu073FKWWaglGCF.kBa/OQac/I2VSSA8oC9FNFVA68nbY5MXzD8q'
    } ,
    {
      email: 'Dino_Smith@gmail.com',
      username: 'Marquise.OConnell',
      hashedPassword: '$2a$10$5.GXugSU/53HQwRKrmTZrOVcVE98cetWWnfQJ0ZniRa9NnmB3fWIK'
    } ,
    {
      email: 'Jerrod_Ullrich@hotmail.com',
      username: 'Antoinette11',
      hashedPassword: '$2a$10$8pLW50ZMNohUfSrW2lCXk.cnfrmRNc9abcWrSq8niJ3.W0Z2CEMVG'
    } ,
    {
      email: 'Delphia_Sanford@yahoo.com',
      username: 'Darrel.Stroman86',
      hashedPassword: '$2a$10$fHDY5ZVEzXlXbVSA9ZBHv.E8fwEZ9WbqELA.Od69ATsKnjWgwKnBq'
    } ,
    {
      email: 'Roman_Harvey89@hotmail.com',
      username: 'Katheryn.Dickinson',
      hashedPassword: '$2a$10$kfsnxYtp0tzleiE9Yhn4AeLiFm7gxBrvX.l0bAbOyxOgdl0viIzui'
    } ,
    {
      email: 'Oran30@gmail.com',
      username: 'Asa94',
      hashedPassword: '$2a$10$Psuvgb82W7xk3U8D4XFNV.KjxuNtxudojfNfftqxbGgqL9O3rvPx6'
    } ,
    {
      email: 'Addison.Wehner@yahoo.com',
      username: 'Gilda_Ritchie58',
      hashedPassword: '$2a$10$Vw3OgfS5cMMZlBoB0lFFMupXoC1KYZI8Cwqu6GAIKGXEM53d8e8Qy'
    } ,
    {
      email: 'Yadira.Emard@hotmail.com',
      username: 'Isabella2',
      hashedPassword: '$2a$10$zhNXYIqkwBu2ZtEED9pVa.6feCsZW0d.xuKw19RzHuCN4sfMLsO9C'
    } ,
    {
      email: 'Summer.Gutmann87@yahoo.com',
      username: 'Matteo.Bogan82',
      hashedPassword: '$2a$10$QgYEYpDNJkAI.DiD8B6R8OpjjHko8IqA8kjPjMkE2Pm9h3Qztt53i'
    } ,
    {
      email: 'Clifton67@hotmail.com',
      username: 'Julian.Bauch63',
      hashedPassword: '$2a$10$9S45bdMaEXaP67cZJNjGIuUwZVVv9gy6p.PKVWYMwNp5RgwZcqyhe'
    } ,
    {
      email: 'Candelario.Rath18@yahoo.com',
      username: 'Ralph.Franecki',
      hashedPassword: '$2a$10$LS9..F3xWKPr5qUUevWF3uEmxrnUBwwvmK5TxFLwhHEcR2JWIq.N6'
    } ,
    {
      email: 'Ellen.Nitzsche@yahoo.com',
      username: 'Oswaldo_Schmitt',
      hashedPassword: '$2a$10$voLTaNCj97R3pCWSbyaloOcDH/XqeRuKP4Ni8KK56g5yiF4yErKIe'
    } ,
    {
      email: 'Libby.McClure69@hotmail.com',
      username: 'Brayan.Daugherty99',
      hashedPassword: '$2a$10$N6FZJPYtsofVYpf2bkBDsOcEWEymHeF6vrOLMJqDPbrPBLHAsTr/m'
    } ,
    {
      email: 'Ocie85@gmail.com',
      username: 'Carolina_Frami7',
      hashedPassword: '$2a$10$YwTwjqyP1YgupekBUVWQu.Dbxq81ecdnwiiRupJ.ak2XdP3qlmXqy'
    } ,
    {
      email: 'Russell_Pollich74@hotmail.com',
      username: 'Gracie_Collier78',
      hashedPassword: '$2a$10$sZw6/Q4oFfPmoYWjxNTLl.1AyEPUzZqH0egLemzftOoGugZKTJpi6'
    } ,
    {
      email: 'Franco.Wiegand16@hotmail.com',
      username: 'Joel.Turcotte',
      hashedPassword: '$2a$10$7czDT1UYNMByhl7ptmA3peKFlPIKJSKJEG4vVgnwVC4ppH7O7Iz/u'
    } ,
    {
      email: 'Vicenta87@yahoo.com',
      username: 'Lavada95',
      hashedPassword: '$2a$10$UQeFo.btgtO3M9ANCwu4eeuImoXhAUksxzxTD6K3HJn8gOrvOcqkS'
    } ,
    {
      email: 'Marcella.King10@hotmail.com',
      username: 'Cruz.Feeney11',
      hashedPassword: '$2a$10$d36QkkmTf7RE.qXQ4OIkPODowmU061pTT2kfaxT8/CI0au7O27.xm'
    } ,
    {
      email: 'Curt_Brown42@hotmail.com',
      username: 'Ivy_Larson',
      hashedPassword: '$2a$10$3nhU56OFSCooK6fCF/qE5OtavSwC39zFdfWchsTFTmfV8A2BmiOu6'
    } ,
    {
      email: 'Hailee77@gmail.com',
      username: 'Stevie.Schimmel',
      hashedPassword: '$2a$10$aK87n5htmrA1BTJnFvNiCeHTJMyt/R3t/C55FGpk4AhsLC1uwhfVu'
    } ,
    {
      email: 'Justine_Greenfelder67@hotmail.com',
      username: 'Dion_Beahan',
      hashedPassword: '$2a$10$wlB9ZtnxrU3R90io3SnpouIV/rhlGrU2Jqm.Pv3QIgGcOca/EmhhK'
    } ,
    {
      email: 'Sonny_Glover78@hotmail.com',
      username: 'Chasity.OKon',
      hashedPassword: '$2a$10$vcgBB9Y2kbzNuCDMWJ6j1OFY9snX5QU89FKnMNCt45SRgtjFNIKC.'
    } ,
    {
      email: 'Zaria_Walter83@yahoo.com',
      username: 'Ollie16',
      hashedPassword: '$2a$10$nQ/144syvKfDvMtka8tsxO8s3rBT4G05kGEbi0SlFGkhmLmhaM4iq'
    } ,
    {
      email: 'Coy84@hotmail.com',
      username: 'Adrienne.Nolan56',
      hashedPassword: '$2a$10$.vqiKF5LOtBkcWhVeOYc1eH.rnEOBMz8UbwesacO9hIBj8HHQATmi'
    } ,
    {
      email: 'Saige76@gmail.com',
      username: 'Raquel10',
      hashedPassword: '$2a$10$9p5Sh7/BHwEhSMMG60NW0.IYHJfs.xhf5YbmFLebArRLyV3tpfk1S'
    } ,
    {
      email: 'Vada_Marks16@gmail.com',
      username: 'Julie.Kihn57',
      hashedPassword: '$2a$10$rQ59bKotACiGklz0CopJG.tsh9pfAvjqdgyxKomUhGaD.1WAtIadK'
    } ,
    {
      email: 'Daija_Willms68@yahoo.com',
      username: 'Eileen_Gaylord',
      hashedPassword: '$2a$10$W8YXOlVDPALcZhUlMiLtFOchEtAUQYCY1TL2pLd7R203YiatMmzkq'
    } ,
    {
      email: 'Carissa64@gmail.com',
      username: 'Chanel68',
      hashedPassword: '$2a$10$/4xU5EhtP5oQU34upahdxOKSHRNvQ.INptwCMl9Ox04HXSfe8Mfcy'
    } ,
    {
      email: 'Aurore_Rau80@hotmail.com',
      username: 'Alverta67',
      hashedPassword: '$2a$10$Svo7gi7lkrqp0OluGfE.D.CfzowPT8ZXNiNJuAhg9zDsAai1kiPEq'
    } ,
    {
      email: 'Wilhelmine_Lowe82@gmail.com',
      username: 'Ona.Nienow',
      hashedPassword: '$2a$10$kRwWOi2n5Z8ySZG/bxfnuu3NFibRj5vFXZJi.Zezj5jAFa4JLOqdO'
    } ,
    {
      email: 'Isabelle27@gmail.com',
      username: 'Sanford_Bode79',
      hashedPassword: '$2a$10$FCRko8flfX1Twu6SWiIldu4pLwpL9KzVGtGMlk4LcHaXEM0piZO9i'
    } ,
    {
      email: 'Ed.Swift10@gmail.com',
      username: 'Pattie48',
      hashedPassword: '$2a$10$2/V6mbQUepuqvBF2n9.ofeKLwa6vwyQE9JsJzHKZeXLDj3yRsdCIm'
    } ,
    {
      email: 'Zoe.Stokes@gmail.com',
      username: 'Providenci17',
      hashedPassword: '$2a$10$DCxPJsZoQSM2efhP2v.2iO2ZAgKIaKEf4jeku8jysEDPsEhsHlsbS'
    } ,
    {
      email: 'Lilyan.Howe@gmail.com',
      username: 'Margarita.Abbott',
      hashedPassword: '$2a$10$42Kr9810aUw333svt0qdd.w2xcZbZE.SgKdPXQOCJvxDP6a.xWNWi'
    } ,
    {
      email: 'Toy_Gulgowski@gmail.com',
      username: 'Jaylon19',
      hashedPassword: '$2a$10$dkSdfsRQhQCh05J6jXaBRuFvmQ66/SLJY7mr56NEnoXPA9AKrLcu.'
    } ,
    {
      email: 'Catalina28@yahoo.com',
      username: 'Caesar.Hintz',
      hashedPassword: '$2a$10$IxqAftmlQtVgkCwujYdxuOINR0ZNMVi1/Y4LhZyVbAmZ3Juj1IvKG'
    } ,
    {
      email: 'Hope49@hotmail.com',
      username: 'Aditya_Hartmann',
      hashedPassword: '$2a$10$ipSoyDBiIHE2W4NZk8M62.OXeLwVZpuw/HZnem6kr5HsZvFh7PKYq'
    } ,
    {
      email: 'Jeromy_Cruickshank@gmail.com',
      username: 'Yazmin84',
      hashedPassword: '$2a$10$jg2DdOUpiR.UtU2oXug5wuQAGwwVxHf1PK2m17vzcPxlePMarnp82'
    } ,
    {
      email: 'Loren.Hayes71@yahoo.com',
      username: 'Alexzander_Fadel88',
      hashedPassword: '$2a$10$e7KKt18Vuuzbg2.q1RZ17.JXDG0QXgUEqufZv7ghXVdmU/cA5Xtx2'
    } ,
    {
      email: 'Gussie62@gmail.com',
      username: 'Willow_Abshire',
      hashedPassword: '$2a$10$Npxhx/JmUzHPJlXUINj2xeAavKAx7lFE8SoN38uppLsQlBvL3vRXa'
    } ,
    {
      email: 'Zula52@hotmail.com',
      username: 'Katelin_Ullrich',
      hashedPassword: '$2a$10$8j5hVwGEAHVG2BoyB3NemuabWdC4iU8/FOhwTMemleBaGFxpYxJKm'
    } ,
    {
      email: 'Maximus48@gmail.com',
      username: 'Raymond_Greenholt28',
      hashedPassword: '$2a$10$MUKQOoREuETQw/CBeu22TOy4GWTU4x4aTMFANI9Gvq2ORT.maTM02'
    } ,
    {
      email: 'Keyon41@gmail.com',
      username: 'Bennett.Jacobs62',
      hashedPassword: '$2a$10$KTHLPzPFZ1RSABbgjdFkj.m0BvRTPJEHNLvRVO5bMX9tUGM0Dzale'
    } ,
    {
      email: 'Anais.Sporer28@hotmail.com',
      username: 'Tevin_White',
      hashedPassword: '$2a$10$clqSdBUpnJ4T12lxaA/LGeRApBeMHcVzCWxcpE/42VgGcGMY4UmTC'
    } ,
    {
      email: 'Emile43@gmail.com',
      username: 'Brett.Lynch',
      hashedPassword: '$2a$10$EJb2NZwcqYzx27Xv100k1.79D0QfXhwasdR6IKKB4quYIIwf8UbWm'
    } ,
    {
      email: 'Amara.Lehner59@yahoo.com',
      username: 'Hildegard.Collins',
      hashedPassword: '$2a$10$Ak.FpMxjdNHpd9m1MsVVse9ZGyFqQBhFLdZthSuH38Ret.x/bmBqa'
    } ,], {});
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users', {
      username: { [Op.in]: ['Demo-lition', 'FakeUser1', 'FakeUser2'] }
    }, {});
  }
};