/**
 * Copyright (c) 2019 Uber Technologies, Inc.
 *
 * <p>Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file
 * except in compliance with the License. You may obtain a copy of the License at
 *
 * <p>http://www.apache.org/licenses/LICENSE-2.0
 *
 * <p>Unless required by applicable law or agreed to in writing, software distributed under the
 * License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
 * express or implied. See the License for the specific language governing permissions and
 * limitations under the License.
 */

// Simple flag cleanup in conditional
if (isFlagTreated(featureFlag)) {
  f1();
} else {
  f2();
}

// String literal cleanup
if (hasFeatureFlag('ABC')) {
  f1();
} else {
  f2();
}

// Assignment cleanup
var a = isToggleDisabled(featureFlag);
if (a) {
  f1();
} else {
  f2();
}

// function cleanup
function b() {
  return isFlagTreated(featureFlag);
}

if (b() || f1()) {
  f1();
} else {
  f2();
}

// Complex cleanup
var c = isToggleDisabled(featureFlag)
  ? f1()
  : isToggleDisabled(featureFlag)
    ? f2()
    : isFlagTreated(featureFlag)
      ? f3()
      : f4();

if (!test1 && !test2 && !test3 && !hasFeatureFlag('test')) {
  f1();
}


const Test = () => {
  return (
    <>
      {hasFeatureFlag('test') && <><View1/> {!hasFeatureFlag('test') ? <View5/> : <View6/>}</>}
      {hasFeatureFlag('test') && hasFeatureFlag('test2') && <><View1/> {!hasFeatureFlag('test') ? <View5/> : <View6/>}</>}

      {!hasFeatureFlag('test') && <View2/>}
      {hasFeatureFlag('test') ? (<><View3/></>) : (<><View4/></>) }
      <View
        attribute={hasFeatureFlag('test') && <View><Text>abc</Text></View>}
        attribute2={hasFeatureFlag('test') && ab && c()}
        attribute3={hasFeatureFlag('test') ? a : b}
      />
    </>
  )
}
