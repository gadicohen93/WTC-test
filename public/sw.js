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


// self.addEventListener('sync', function(event) {
//   if (event.tag == "sendAll")
//   {
//     console.log("sync sync sync");    
//   }
//   // event.waitUntil(
//   //   store.outbox('readonly').then(function(outbox) {
//   //     return outbox.getAll();
//   //   }).then(function(messages) {
//   //     // send the messages
//   //   }).catch(function(err) { console.error(err); });
//   // );
// });

// While overkill for this specific sample in which there is only one cache,
// this is one best practice that can be followed in general to keep track of
// multiple caches used by a given service worker, and keep them all versioned.
// It maps a shorthand identifier for a cache to a specific, versioned cache name.

// Note that since global state is discarded in between service worker restarts, these
// variables will be reinitialized each time the service worker handles an event, and you
// should not attempt to change their values inside an event handler. (Treat them as constants.)

// If at any point you want to force pages that use this service worker to start using a fresh
// cache, then increment the CACHE_VERSION value. It will kick off the service worker update
// flow and the old cache(s) will be purged as part of the activate event handler when the
// updated service worker is activated.
var CACHE_VERSION = 1;
var CURRENT_CACHES = {
  'offline-posts': 'offline-posts-v' + CACHE_VERSION
};

var idbDatabase;
var IDB_VERSION = 1;
var STOP_RETRYING_AFTER = 86400000; // One day, in milliseconds.
var STORE_NAME = 'requests';

// This is basic boilerplate for interacting with IndexedDB. Adapted from
// https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API/Using_IndexedDB
function openDatabaseAndReplayRequests() {
  var indexedDBOpenRequest = indexedDB.open('offline-posts', IDB_VERSION);

  // This top-level error handler will be invoked any time there's an IndexedDB-related error.
  indexedDBOpenRequest.onerror = function(error) {
    console.error('IndexedDB error:', error);
  };

  // This should only execute if there's a need to create a new database for the given IDB_VERSION.
  indexedDBOpenRequest.onupgradeneeded = function() {
    this.result.createObjectStore(STORE_NAME, {keyPath: 'url'});
  };

  // This will execute each time the database is opened.
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

  getObjectStore(STORE_NAME).openCursor().onsuccess = function(event) {
    // See https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API/Using_IndexedDB#Using_a_cursor
    var cursor = event.target.result;

    if (cursor) {
      // Keep moving the cursor forward and collecting saved requests.
      savedRequests.push(cursor.value);
      cursor.continue();
    } else {
      // At this point, we have all the saved requests.
      console.log('About to replay %d saved Google Analytics requests...',
        savedRequests.length);

      savedRequests.forEach(function(savedRequest) {
        var queueTime = Date.now() - savedRequest.timestamp;
        if (queueTime > STOP_RETRYING_AFTER) {
          getObjectStore(STORE_NAME, 'readwrite').delete(serialize(savedRequest));
          console.log(' Request has been queued for %d milliseconds. ' +
            'No longer attempting to replay.', queueTime);
        } else {
          // The qt= URL parameter specifies the time delta in between right now, and when the
          // /collect request was initially intended to be sent. See
          // https://developers.google.com/analytics/devguides/collection/protocol/v1/parameters#qt
          var request = savedRequest.request;
          
        }
      });

      sendInOrder(savedRequests);
    }
  };
}

self.addEventListener('sync', (event) => {
  console.log("Eventz " + event);
  if (event.tag == 'event1') {
    event.waitUntil(doSomething())
  }
})


function sendInOrder(requests) {
  var sending = requests.reduce(function(prevPromise, serialized) {
    console.log('Sending', JSON.stringify(serialized.request));
    return prevPromise.then(function() {
      return deserialize(serialized.request).then(function(request) {
        return fetch(request).then(function(response) {
          console.log("FETCHING::: " + JSON.stringify(request) + " " + response.status);

            if (response.status < 400) {
              // If sending the /collect request was successful, then remove it from the IndexedDB.
              getObjectStore(STORE_NAME, 'readwrite').delete(request.url);
              console.log(' Replaying succeeded.');
            } else {
              // This will be triggered if, e.g., Google Analytics returns a HTTP 50x response.
              // The request will be replayed the next time the service worker starts up.
              console.error(' Replaying failed:', response);
            }
          }).catch(function(error) {
            // This will be triggered if the network is still down. The request will be replayed again
            // the next time the service worker starts up.
            console.error(' Replaying failed:', error);
          });

      });
    });
  }, Promise.resolve());
  return sending;
}


self.addEventListener('fetch', function(event) {

  console.log('Handling fetch event for', event.request.url);
  var parts = event.request.url.split('/');
  var lastSegment = parts.pop() || parts.pop();
  console.log(lastSegment + " " + (lastSegment == "lastSegment"));

      if (lastSegment == "triggerSync")
        {
          replayPostRequests();
        }


  event.respondWith(
    caches.open(staticCacheName).then(function(cache) {


      
      return cache.match(event.request).then(function(response) {
        
        
        if (response) {
          // If there is an entry in the cache for event.request, then response will be defined
          // and we can just return it.
          console.log(' Found response in cache:', response);

          return response;
        }

        // Otherwise, if there is no entry in the cache for event.request, response will be
        // undefined, and we need to fetch() the resource.
        console.log(' No response for %s found in cache. ' +
          'About to fetch from network...', event.request.url);

        // We call .clone() on the request since we might use it in the call to cache.put() later on.
        // Both fetch() and cache.put() "consume" the request, so we need to make a copy.
        // (see https://fetch.spec.whatwg.org/#dom-request-clone)
        if (event.request.cache === 'only-if-cached' && event.request.mode !== 'same-origin') {
          return response;
        }
        

        return fetch(event.request.clone())
        .then(function(response) {
          console.log('  Response for %s from network is: %O',
            event.request.url, response);

          // Optional: add in extra conditions here, e.g. response.type == 'basic' to only cache
          // responses from the same domain. See https://fetch.spec.whatwg.org/#concept-response-type
          if (response.status < 400 && event.request.method !='POST') {
            // This avoids caching responses that we know are errors (i.e. HTTP status code of 4xx or 5xx).
            // One limitation is that, for non-CORS requests, we get back a filtered opaque response
            // (https://fetch.spec.whatwg.org/#concept-filtered-response-opaque) which will always have a
            // .status of 0, regardless of whether the underlying HTTP call was successful. Since we're
            // blindly caching those opaque responses, we run the risk of caching a transient error response.
            //
            // We need to call .clone() on the response object to save a copy of it to the cache.
            // (https://fetch.spec.whatwg.org/#dom-request-clone)
            // cache.put(event.request, response.clone());
          } else if (response.status >= 500) {
            // If this is a Google Analytics ping then we want to retry it if a HTTP 5xx response
            // was returned, just like we'd retry it if the network was down.
            checkForAnalyticsRequest(event.request.clone());
          }

          // Return the original response object, which will be used to fulfill the resource request.
          return response;
        })
        .catch(function(error) {
          console.log("NETWORK FAILURE!!");
          // The catch() will be triggered for network failures. Let's see if it was a request for
          // a Google Analytics ping, and save it to be retried if it was.
          checkForAnalyticsRequest(event.request.clone());

          return response;
        });
      }).catch(function(error) {
        // This catch() will handle exceptions that arise from the match() or fetch() operations.
        // Note that a HTTP error response (e.g. 404) will NOT trigger an exception.
        // It will return a normal response object that has the appropriate error code set.
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

function deserialize(data) {
  console.log(JSON.stringify(data));
  //   var req = new Request(data.url, {
  //     method: data.method,
  //     headers: data.headers,
  //     mode: 'same-origin', // need to set this properly
  //     credentials: data.credentials,
  //     redirect: 'manual'   // let browser handle redirects
  // });
  delete data.credentials;
  delete data.mode;
  return  Promise.resolve(new Request(data.url, data));;
}

function checkForAnalyticsRequest(request) {
  console.log("saving requestUrl");
  // Construct a URL object (https://developer.mozilla.org/en-US/docs/Web/API/URL.URL)
  // to make it easier to check the various components without dealing with string parsing.
  // var url = new URL(request.url);
    console.log('  Storing Google Analytics request in IndexedDB ' +
      'to be replayed later.');
    saveAnalyticsRequest(request);
}

function saveAnalyticsRequest(request) {
if (request.method =='POST'){
  serialize(request).then(function(serialized) {
    console.log(JSON.stringify(serialized) + " < < <");
    getObjectStore(STORE_NAME, 'readwrite').add({
        url: request.url,
        request: serialized,
        timestamp: Date.now()
      });
  });
}
  
  // 
  
}