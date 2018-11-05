const filesToCache = [
  '/',
  'index.html',
  'bundle.js',
  'img/flags-normal/tg.png', 'img/flags-normal/me.png', 'img/flags-normal/la.png', 'img/flags-normal/mr.png', 'img/flags-normal/ni.png', 'img/flags-normal/lv.png', 'img/flags-normal/om.png', 'img/flags-normal/af.png', 'img/flags-normal/cy.png', 'img/flags-normal/bj.png', 'img/flags-normal/cn.png', 'img/flags-normal/co.png', 'img/flags-normal/ag.png', 'img/flags-normal/md.png', 'img/flags-normal/zm.png', 'img/flags-normal/vn.png', 'img/flags-normal/td.png', 'img/flags-normal/lb.png', 'img/flags-normal/lu.png', 'img/flags-normal/cz.png', 'img/flags-normal/ae.png', 'img/flags-normal/cm.png', 'img/flags-normal/bi.png', 'img/flags-normal/ar.png', 'img/flags-normal/bh.png', 'img/flags-normal/cl.png', 'img/flags-normal/ad.png', 'img/flags-normal/lt.png', 'img/flags-normal/mg.png', 'img/flags-normal/lc.png', 'img/flags-normal/tr.png', 'img/flags-normal/ua.png', 'img/flags-normal/tv.png', 'img/flags-normal/mt.png', 'img/flags-normal/no.png', 'img/flags-normal/mc.png', 'img/flags-normal/ch.png', 'img/flags-normal/bz.png', 'img/flags-normal/ci.png', 'img/flags-normal/mu.png', 'img/flags-normal/us.png', 'img/flags-normal/tw.png', 'img/flags-normal/ye.png', 'img/flags-normal/mw.png', 'img/flags-normal/nl.png', 'img/flags-normal/ls.png', 'img/flags-normal/bo.png', 'img/flags-normal/at.png', 'img/flags-normal/by.png', 'img/flags-normal/au.png', 'img/flags-normal/bn.png', 'img/flags-normal/ma.png', 'img/flags-normal/nz.png', 'img/flags-normal/lr.png', 'img/flags-normal/mv.png', 'img/flags-normal/ug.png', 'img/flags-normal/tt.png', 'img/flags-normal/pl.png', 'img/flags-normal/rs.png', 'img/flags-normal/in.png', 'img/flags-normal/ge.png', 'img/flags-normal/gr.png', 'img/flags-normal/gd.png', 'img/flags-normal/kp.png', 'img/flags-normal/kg.png', 'img/flags-normal/sv.png', 'img/flags-normal/sa.png', 'img/flags-normal/sc.png', 'img/flags-normal/st.png', 'img/flags-normal/ke.png', 'img/flags-normal/kr.png', 'img/flags-normal/dj.png', 'img/flags-normal/gq.png', 'img/flags-normal/dk.png', 'img/flags-normal/ks.png', 'img/flags-normal/il.png', 'img/flags-normal/sb.png', 'img/flags-normal/py.png', 'img/flags-normal/ru.png', 'img/flags-normal/kw.png', 'img/flags-normal/do.png', 'img/flags-normal/gt.png', 'img/flags-normal/gb.png', 'img/flags-normal/sg.png', 'img/flags-normal/pk.png', 'img/flags-normal/sr.png', 'img/flags-normal/se.png', 'img/flags-normal/jp.png', 'img/flags-normal/gw.png', 'img/flags-normal/eh.png', 'img/flags-normal/dz.png', 'img/flags-normal/ga.png', 'img/flags-normal/fr.png', 'img/flags-normal/dm.png', 'img/flags-normal/hn.png', 'img/flags-normal/sd.png', 'img/flags-normal/rw.png', 'img/flags-normal/ph.png', 'img/flags-normal/qa.png', 'img/flags-normal/pe.png', 'img/flags-normal/si.png', 'img/flags-normal/ht.png', 'img/flags-normal/es.png', 'img/flags-normal/gm.png', 'img/flags-normal/er.png', 'img/flags-normal/fi.png', 'img/flags-normal/ee.png', 'img/flags-normal/kn.png', 'img/flags-normal/hu.png', 'img/flags-normal/iq.png', 'img/flags-normal/id.png', 'img/flags-normal/is.png', 'img/flags-normal/eg.png', 'img/flags-normal/fj.png', 'img/flags-normal/gn.png', 'img/flags-normal/gy.png', 'img/flags-normal/ir.png', 'img/flags-normal/km.png', 'img/flags-normal/ie.png', 'img/flags-normal/kz.png', 'img/flags-normal/ro.png', 'img/flags-normal/sk.png', 'img/flags-normal/pg.png', 'img/flags-normal/pt.png', 'img/flags-normal/so.png', 'img/flags-normal/hr.png', 'img/flags-normal/ki.png', 'img/flags-normal/jm.png', 'img/flags-normal/ec.png', 'img/flags-normal/et.png', 'img/flags-normal/kh.png', 'img/flags-normal/sy.png', 'img/flags-normal/sn.png', 'img/flags-normal/pw.png', 'img/flags-normal/sl.png', 'img/flags-normal/fm.png', 'img/flags-normal/de.png', 'img/flags-normal/gh.png', 'img/flags-normal/jo.png', 'img/flags-normal/it.png', 'img/flags-normal/pa.png', 'img/flags-normal/sz.png', 'img/flags-normal/sm.png', 'img/flags-normal/tn.png', 'img/flags-normal/ml.png', 'img/flags-normal/cg.png', 'img/flags-normal/ao.png', 'img/flags-normal/bt.png', 'img/flags-normal/bb.png', 'img/flags-normal/cf.png', 'img/flags-normal/mm.png', 'img/flags-normal/li.png', 'img/flags-normal/na.png', 'img/flags-normal/mz.png', 'img/flags-normal/to.png', 'img/flags-normal/ve.png', 'img/flags-normal/tz.png', 'img/flags-normal/tm.png', 'img/flags-normal/mx.png', 'img/flags-normal/lk.png', 'img/flags-normal/cd.png', 'img/flags-normal/al.png', 'img/flags-normal/bw.png', 'img/flags-normal/cr.png', 'img/flags-normal/am.png', 'img/flags-normal/az.png', 'img/flags-normal/ba.png', 'img/flags-normal/mn.png', 'img/flags-normal/my.png', 'img/flags-normal/tl.png', 'img/flags-normal/ws.png', 'img/flags-normal/th.png', 'img/flags-normal/ly.png', 'img/flags-normal/br.png', 'img/flags-normal/cv.png', 'img/flags-normal/be.png', 'img/flags-normal/ca.png', 'img/flags-normal/bd.png', 'img/flags-normal/bs.png', 'img/flags-normal/ng.png', 'img/flags-normal/mk.png', 'img/flags-normal/np.png', 'img/flags-normal/va.png', 'img/flags-normal/uz.png', 'img/flags-normal/vc.png', 'img/flags-normal/zw.png', 'img/flags-normal/nr.png', 'img/flags-normal/ne.png', 'img/flags-normal/cu.png', 'img/flags-normal/bf.png', 'img/flags-normal/bg.png', 'img/flags-normal/mh.png', 'img/flags-normal/za.png', 'img/flags-normal/uy.png', 'img/flags-normal/vu.png', 'img/flags-normal/tj.png'
];

const staticCacheName = 'pages-cache-v1';

self.addEventListener('install', event => {
  console.log('Attempting to install service worker and cache static assets');
  event.waitUntil(
    caches.open(staticCacheName)
    .then(cache => {
      return cache.addAll(filesToCache);
    })
  );
});

var CACHE_VERSION = 1;
var CURRENT_CACHES = {
  'offline-posts': 'offline-posts-v' + CACHE_VERSION
};

var idbDatabase;
var IDB_VERSION = 1;
var STORE_NAME = 'requests';

function openDatabaseAndReplayRequests() {
  var indexedDBOpenRequest = indexedDB.open('offline-posts', IDB_VERSION);

  indexedDBOpenRequest.onerror = function(error) {
    console.error('IndexedDB error:', error);
  };

  indexedDBOpenRequest.onupgradeneeded = function() {
    this.result.createObjectStore(STORE_NAME, {keyPath: 'url'});
  };

  indexedDBOpenRequest.onsuccess = function() {
    idbDatabase = this.result;
    replayPostRequests();
  };
}

// Helper method to get the object store that we care about.
function getObjectStore(storeName, mode) {
  return idbDatabase.transaction(storeName, mode).objectStore(storeName);
}

openDatabaseAndReplayRequests();

function replayPostRequests() {
  var savedRequests = [];

  getObjectStore(STORE_NAME).openCursor().onsuccess = function(event) 
  {
    // See https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API/Using_IndexedDB#Using_a_cursor
    var cursor = event.target.result;
    if (cursor) 
    {
      savedRequests.push(cursor.value);
      cursor.continue();
    } 
    else 
    {
    
      savedRequests.forEach(function(savedRequest) 
      {
        var request = savedRequest.request;
      });

      sendInOrder(savedRequests);
    }
  };
}

function sendInOrder(requests) 
{
  var sending = requests.reduce(function(prevPromise, serialized) 
  {
    return prevPromise.then(function() 
    {
      return deserialize(serialized.request).then(function(request) 
      {
        return fetch(request).then(function(response) {
            if (response.status < 400) 
            {
              getObjectStore(STORE_NAME, 'readwrite').delete(request.url);
              console.log('Replaying a request succeeded.');
            } 
            else 
            {
              console.error(' Replaying a request failed: ', response);
            }
          }).catch(function(error) 
          {
       
            console.error(' Replaying a request failed:', error);
          });

      });
    });
  }, 
  Promise.resolve());
  return sending;
}


self.addEventListener('fetch', function(event) 
{
  var parts = event.request.url.split('/');
  var lastSegment = parts.pop() || parts.pop();
  if (lastSegment == "triggerSync")
  {
    replayPostRequests();
  }


  event.respondWith(
    caches.open(staticCacheName).then(function(cache) {
      return cache.match(event.request).then(function(response) 
      {
        if (response) 
        {
          return response;
        }

        if (event.request.cache === 'only-if-cached' && event.request.mode !== 'same-origin') {
          return response;
        }
        

        return fetch(event.request.clone())
        .then(function(response) {
        
          if (response.status < 400 && event.request.method !='POST') 
          {
            //do nothing
          } 
          else if (response.status >= 500) {
            saveRequestForReplayingLater(event.request.clone());
          }

          return response;
        })
        .catch(function(error) {
          console.log("NETWORK FAILURE!!");
          saveRequestForReplayingLater(event.request.clone());

          return response;
        });
      }).catch(function(error) {
        throw error;
      });
    })
  );
});

function serialize(request)
{
  var headers = {};
  console.log(request + " " + request.headers + " " + JSON.stringify(request));
  for (var entry of request.headers.entries()) {
    headers[entry[0]] = entry[1];
  }
  var serialized = {
    url: request.url,
    headers: headers,
    method: request.method,
    mode: request.mode,
    credentials: request.credentials,
    cache: request.cache,
    redirect: request.redirect,
    referrer: request.referrer
  };

  if (request.method !== 'GET' && request.method !== 'HEAD') {
    return request.clone().text().then(function(body) {
      serialized.body = body;
      return Promise.resolve(serialized);
    });
  }
  return Promise.resolve(serialized);
}

function deserialize(data) 
{
  delete data.credentials;
  delete data.mode;
  return  Promise.resolve(new Request(data.url, data));;
}

function saveRequestForReplayingLater(request) 
{
    saveRequest(request);
}

function saveRequest(request) 
{
if (request.method =='POST')
{
  serialize(request).then(function(serialized) 
  {
    getObjectStore(STORE_NAME, 'readwrite').add({
        url: request.url,
        request: serialized,
        timestamp: Date.now()
      });
  });
}
  
  
}