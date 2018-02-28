exports.adjustStyleWithoutTilejson = function(opts) {

  var style = opts.style;
  var conf = opts.conf_url;

  delete style.created;
  delete style.draft;
  delete style.modified;
  delete style.owner;

  if (style.sources['basemap']) {
    style.sources['basemap'] = {
      "type": "vector",
      "tiles": conf.tileserver_base,
      "name": "OpenMapTiles",
      "format": "pbf",
      "basename": "v3.6.mbtiles",
      "id": "openmaptiles",
      "attribution": "Qwant Maps <a href=\"http://www.openmaptiles.org/\" target=\"_blank\">&copy; OpenMapTiles</a> <a href=\"http://www.openstreetmap.org/about/\" target=\"_blank\">&copy; OpenStreetMap contributors</a>",
      "center": [-12.2168, 28.6135, 4],
      "description": "Une adaptation des tuiles OpenMapTiles pour Qwant Maps",
      "maxzoom": 15,
      "minzoom": 0,
      "pixel_scale": "256",
    }
  }
  if (style.sources['poi']) {
    style.sources['poi'] = {
      "type": "vector",
      "tiles": conf.tileserver_poi,
      "name": "OpenMapTiles POIs",
      "format": "pbf",
      "basename": "v3.6.mbtiles",
      "id": "poi",
      "center": [-12.2168, 28.6135, 4],
      "description": "Une adaptation des tuiles OpenMapTiles pour Qwant Maps - des POIs",
      "maxzoom": 15,
      "minzoom": 12,
      "pixel_scale": "256",
    }
  }
  if (opts.needSprite) {
    style.sprite = conf.spriteserver + "sprite";
  } else {
    delete style.sprite;
  }

  style.glyphs = conf.fontserver + "{fontstack}/{range}.pbf";

};

exports.adjustStyleWithTilejson = function(opts) {

  var style = opts.style;
  var tileschema_base = opts.tileschema_base;
  var tileschema_poi = opts.tileschema_poi;
  var conf = opts.conf_url;

  delete style.created;
  delete style.draft;
  delete style.modified;
  delete style.owner;

  if (style.sources['basemap']) {
    tileschema_base['type'] = "vector";
    tileschema_base['tiles'] = conf.tileserver_base;
    style.sources['basemap'] = tileschema_base;
  }
  if (style.sources['poi']) {
    tileschema_poi['type'] = "vector";
    tileschema_poi['tiles'] = conf.tileserver_poi;
    style.sources['poi'] = tileschema_poi;
  }
  if (opts.needSprite) {
    style.sprite = conf.spriteserver + "sprite";
  } else {
    delete style.sprite;
  }

  style.glyphs = conf.fontserver + "{fontstack}/{range}.pbf";
};

exports.adjustStyleForOpenMapTilesCDN = function(opts) {

  var style = opts.style;

  delete style.created;
  delete style.draft;
  delete style.modified;
  delete style.owner;

  if (style.sources['basemap']) {
    style.sources['basemap'] = {
      "type": "vector",
      "url": "https://free.tilehosting.com/data/v3.json?key=RiS4gsgZPZqeeMlIyxFo"
    }
  }
  if (style.sources['poi']) {
    style.sources['poi'] = {
      "type": "vector",
      "url": "https://free.tilehosting.com/data/v3.json?key=RiS4gsgZPZqeeMlIyxFo"
    }
  }

  if (opts.needSprite) {
    style.sprite = "https://qwantresearch.github.io/qwant-basic-gl-style/sprite";
  } else {
    delete style.sprite;
  }

  style.glyphs = "https://qwantresearch.github.io/fonts/{fontstack}/{range}.pbf";


};
