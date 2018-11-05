const avatarBaseUrl = '/img/flags-normal/';

export default class AvatarHelper {

  getAvatarKeys() {
    return ['tg.png', 'me.png', 'la.png', 'mr.png', 'ni.png', 'lv.png', 'om.png', 'af.png', 'cy.png', 'bj.png', 'cn.png', 'co.png', 'ag.png', 'md.png', 'zm.png', 'vn.png', 'td.png', 'lb.png', 'lu.png', 'cz.png', 'ae.png', 'cm.png', 'bi.png', 'ar.png', 'bh.png', 'cl.png', 'ad.png', 'lt.png', 'mg.png', 'lc.png', 'tr.png', 'ua.png', 'tv.png', 'mt.png', 'no.png', 'mc.png', 'ch.png', 'bz.png', 'ci.png', 'mu.png', 'us.png', 'tw.png', 'ye.png', 'mw.png', 'nl.png', 'ls.png', 'bo.png', 'at.png', 'by.png', 'au.png', 'bn.png', 'ma.png', 'nz.png', 'lr.png', 'mv.png', 'ug.png', 'tt.png', 'pl.png', 'rs.png', 'in.png', 'ge.png', 'gr.png', 'gd.png', 'kp.png', 'kg.png', 'sv.png', 'sa.png', 'sc.png', 'st.png', 'ke.png', 'kr.png', 'dj.png', 'gq.png', 'dk.png', 'ks.png', 'il.png', 'sb.png', 'py.png', 'ru.png', 'kw.png', 'do.png', 'gt.png', 'gb.png', 'sg.png', 'pk.png', 'sr.png', 'se.png', 'jp.png', 'gw.png', 'eh.png', 'dz.png', 'ga.png', 'fr.png', 'dm.png', 'hn.png', 'sd.png', 'rw.png', 'ph.png', 'qa.png', 'pe.png', 'si.png', 'ht.png', 'es.png', 'gm.png', 'er.png', 'fi.png', 'ee.png', 'kn.png', 'hu.png', 'iq.png', 'id.png', 'is.png', 'eg.png', 'fj.png', 'gn.png', 'gy.png', 'ir.png', 'km.png', 'ie.png', 'kz.png', 'ro.png', 'sk.png', 'pg.png', 'pt.png', 'so.png', 'hr.png', 'ki.png', 'jm.png', 'ec.png', 'et.png', 'kh.png', 'sy.png', 'sn.png', 'pw.png', 'sl.png', 'fm.png', 'de.png', 'gh.png', 'jo.png', 'it.png', 'pa.png', 'sz.png', 'sm.png', 'tn.png', 'ml.png', 'cg.png', 'ao.png', 'bt.png', 'bb.png', 'cf.png', 'mm.png', 'li.png', 'na.png', 'mz.png', 'to.png', 've.png', 'tz.png', 'tm.png', 'mx.png', 'lk.png', 'cd.png', 'al.png', 'bw.png', 'cr.png', 'am.png', 'az.png', 'ba.png', 'mn.png', 'my.png', 'tl.png', 'ws.png', 'th.png', 'ly.png', 'br.png', 'cv.png', 'be.png', 'ca.png', 'bd.png', 'bs.png', 'ng.png', 'mk.png', 'np.png', 'va.png', 'uz.png', 'vc.png', 'zw.png', 'nr.png', 'ne.png', 'cu.png', 'bf.png', 'bg.png', 'mh.png', 'za.png', 'uy.png', 'vu.png', 'tj.png'];
  }

  avatarUrlKey(avatarKey) {
    if (avatarKey === undefined || avatarKey === null || avatarKey === '') {
     return `${avatarBaseUrl}default.png`;
    }
    return `${avatarBaseUrl}${avatarKey}`;
  }

}