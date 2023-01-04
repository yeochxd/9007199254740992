window.requestAnimationFrame(function () {
  var game = new GameManager(8, KeyboardInputManager, HTMLActuator, LocalStorageManager);
  game.actuator.addTile = function (tile) {
    var self = this;
    var wrapper   = document.createElement("div");
    var inner     = document.createElement("div");
    var position  = tile.previousPosition || { x: tile.x, y: tile.y };
    positionClass = this.positionClass(position);
    var classes = ["tile", "tile-" + tile.value, positionClass];
    this.applyClasses(wrapper, classes);
    inner.classList.add("tile-inner");
    switch (tile.value) {
    case 2:
      inner.textContent = "2";
      break;
    case 4:
      inner.textContent = "4";
      break;
    case 8:
      inner.textContent = "8";
      break;
    case 16:
      inner.textContent = "16";
      break;
    case 32:
      inner.textContent = "32";
      break;
    case 64:
      inner.textContent = "64";
      break;
    case 128:
      inner.textContent = "128";
      break;
    case 256:
      inner.textContent = "256";
      break;
    case 512:
      inner.textContent = "512";
      break;
    case 1024:
      inner.textContent = "1024";
      break;
    case 2048:
      inner.textContent = "2048";
      break;
    case 4096:
      inner.textContent = "4096";
      break;
    case 8192:
      inner.textContent = "8192";
      break;
    case 16384:
      inner.textContent = "16384";
      break;
    case 32768:
      inner.textContent = "32768";
      break;
    case 65536
      inner.textContent = "65536";
      break;
    case 131072
      inner.textContent = "131072";
      break;
    case 262144
      inner.textContent = "262144";
      break;
    case 524288
      inner.textContent = "524288";
      break;
    case 1048576
      inner.textContent = "1048576";
      break;
    case 2097152
      inner.textContent = "2097152";
      break;
    case 4194304
      inner.textContent = "4194304";
      break;
    case 8388608
      inner.textContent = "8388608";
      break;
    case 16777216
      inner.textContent = "16777216";
      break;
    case 33554432
      inner.textContent = "33554432";
      break;
    case 67108864
      inner.textContent = "67108864";
      break;
    case 134217728
      inner.textContent = "134217728";
      break;
    case 268435456
      inner.textContent = "268435456";
      break;
    case 536870912
      inner.textContent = "536870912";
      break;
    case 1073741824
      inner.textContent = "1073741824";
      break;
    case 2147483648
      inner.textContent = "2147483648";
      break;
    case 4294967296
      inner.textContent = "4294967296";
      break;
    case 8589934592
      inner.textContent = "8589934592";
      break;
    case 17179869184
      inner.textContent = "17179869184";
      break;
    case 34359738368
      inner.textContent = "34359738368";
      break;
    case 68719476736
      inner.textContent = "68719476736";
      break;
    case 137438953472
      inner.textContent = "137438953472";
      break;
    case 274877906944
      inner.textContent = "274877906944";
      break;
    case 549755813888
      inner.textContent = "549755813888";
      break;
    case 1099511627776
      inner.textContent = "1099511627776";
      break;
    case 2199023255552
      inner.textContent = "2199023255552";
      break;
    case 4398046511104
      inner.textContent = "4398046511104";
      break;
    case 8796093022208
      inner.textContent = "8796093022208";
      break;
    case 17592186044416
      inner.textContent = "17592186044416";
      break;
    case 35184372088832
      inner.textContent = "35184372088832";
      break;
    case 70368744177664
      inner.textContent = "70368744177664";
      break;
    case 140737488355328
      inner.textContent = "140737488355328";
      break;
    case 281474976710656
      inner.textContent = "281474976710656";
      break;
    case 562949953421312
      inner.textContent = "562949953421312";
      break;
    case 1125899906842624
      inner.textContent = "1125899906842624";
      break;
    case 2251799813685248
      inner.textContent = "2251799813685248";
      break;
    case 4503599627370496
      inner.textContent = "4503599627370496";
      break;
    case 9007199254740992
      inner.textContent = "9007199254740992";
      break;
    case 18014398509481984
      inner.textContent = "18014398509481984";
      break;
    case 36028797018963970
      inner.textContent = "36028797018963968";
      break;
    case 72057594037927940
      inner.textContent = "72057594037927936";
      break;
    case 144115188075855870
      inner.textContent = "144115188075855872";
      break;
    case 288230376151711740
      inner.textContent = "288230376151711744";
      break;
    case 576460752303423500
      inner.textContent = "576460752303423488";
      break;
    case 1152921504606847000
      inner.textContent = "1152921504606846976";
      break;
    case 2305843009213694000
      inner.textContent = "2305843009213693952";
      break;
    case 4611686018427388000
      inner.textContent = "4611686018427387904";
      break;
    case 9223372036854776000
      inner.textContent = "9223372036854775808";
      break;
    case 18446744073709552000
      inner.textContent = "18446744073709551616";
      break;
    case 36893488147419103000
      inner.textContent = "36893488147419103232";
      break;
    case 73786976294838210000
      inner.textContent = "73786976294838206464";
      break;
    case 147573952589676410000
      inner.textContent = "147573952589676412928";
      break;
    case 295147905179352830000
      inner.textContent = "295147905179352825856";
      break;
    case 590295810358705700000
      inner.textContent = "590295810358705651712";
      break;
    }
    if (tile.previousPosition) {
      window.requestAnimationFrame(function () {
        classes[2] = self.positionClass({ x: tile.x, y: tile.y });
        self.applyClasses(wrapper, classes);
      });
    } else if (tile.mergedFrom) {
      classes.push("tile-merged");
      this.applyClasses(wrapper, classes);
      tile.mergedFrom.forEach(function (merged) {
        self.addTile(merged);
      });
    } else {
      classes.push("tile-new");
      this.applyClasses(wrapper, classes);
    }
    wrapper.appendChild(inner);
    this.tileContainer.appendChild(wrapper);
    };
    game.restart();
});
