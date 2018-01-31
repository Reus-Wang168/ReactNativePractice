/**
 * Created by Rookie on 2017/11/17.
 */

import React, { Component } from "react";

import { View, Text, Image, FlatList, ScrollView } from "react-native";

import Screen from "../common/screen";

import { CachedImage, ImageCacheProvider } from "react-native-cached-image";

const datas = [
    "http://d.hiphotos.baidu.com/image/pic/item/3b292df5e0fe9925279aa8433ea85edf8db1710b.jpg",
    "http://d.hiphotos.baidu.com/image/pic/item/3b292df5e0fe9925279aa8433ea85edf8db1710b.jpg"
];

const base64Src =
    "data:image/png;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0a\nHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIy\nMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAoAFADASIA\nAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQA\nAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3\nODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWm\np6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEA\nAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSEx\nBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElK\nU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3\nuLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD0mONi\nWWNyu1cAZ4PJHP5dqk5P7slT/sSDr9D3/I0xXKXcgGz58YBbA6npx60vnnzGjmT5c8EEcdCfyyKZ\niQEDy2QsVuVOQSfmb8foelSQGQjAnG7sr856/wBMdKo3OpWts8SXN7bxOwwVlmVWAycE5GRjnn2q\ntr95Lp/hqXVrV45WAjdC3Kncy5PH165pvRXYnJJO5tboQ+2dEEh6kjIP4mpJJhCANjHkAAD+X+FY\n8GuW82m2P2y5to7u4gilVN4UlmGcBSc8ngEVZuNStUt1a7lWEbgBJIQAeQSPrjt7UlqCaauaayLI\nm6MhvTmml43jJZto7/Ngjn/EVTsLm3nZpbaeOeJztLxtuAYep7deh55HWuVm8Taxqt1qcugWli9n\nY5QSXHmM9y4Bz5Ww4PQADOSCvrgITaOyjZkLAg7d+05bOMgd/r/OnkbpCCSrgZDL3H+f5+9YWi6x\nH4h0mLUbaNlkYFZI96tgjgqcY/DjOCD3FavnCaWJJFeNge5K54P/ANb86Y99UPmiEWJAcIGUn2GR\nx/L8vyeipMkqEZXcQDjkZwT+p/SoWlJeSOQjAZTkEjjIGR6c/wCeKkD+XLISMnhSemcDP54Pt0/I\nGefazOdRvdca10+wEVnH5dzdXgzIzgbMpzwTtwo9s9TinuZP+FQkEfJ2I5z+/wC/pXWnw5olxqJv\npNMRriQliWBZGJHUrkr+nXnrSx+HtIg0u40vyALGVleSNpG5bjnOc/wr0PrWtSalT5Ucvsp3bfVM\n4LXtOsrfwFplzEm67kkiMsznc5BiPy57KMAAdBt/E9L4gfdrNhpVtpttcXkibg10Moq9/wD0DOev\nBx1xWpf6Dp15ZwWklt5tpDtEaB2/hGBghsnAz19+elLf6Tp2pbXv7ASmJSsbBypwP4SQRnH49++a\nwjGw3RlZqPW34GD4K4uteQCH5nVQYD+7zl8bf9n0qj8O54dO0XV7a9fYbWd2ulxnywE65Gc/cfpn\np9K62DSdLsprm6t7ZIbhwVPVVxwQAvTsO386ran4T0PVbsz3lis05hRfNV2Td1AJ2kZOMYz6AZ6V\nRdKnKEUu1zK+GFiy+E2lmjws108kRDdVAVc8H1Vhz/WuqnMgVWbDMjgLgc57fmP6VchSKOBI4UVI\nkUKiKMBQOAAO2PSo5VV96yfJuXGSeDjkflQjSOmhDcQMjPMhJBBJB7HHX8KNwiaSPO5SokGPQdfp\nwOP6UUUFIAjk+Ykjg7VfHB65yBx/k1OfuxuHLEn5WPHUdD7f1xRRQAlwke3eVIOeWVRke9QTTE2z\n7inzcHCkYP6/0/wKKECHiPADBUlBP304b8+/5/WpYUhAKovDL0OTkfj9aKKBAF8mT5T8rnG30OO3\n4Dp/+qoXeR8xyIDjHTI59e+R7YPTnFFFAI//2Q==";

var base64Icon =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAwBQTFRF7c5J78kt+/Xm78lQ6stH5LI36bQh6rcf7sQp671G89ZZ8c9V8c5U9+u27MhJ/Pjv9txf8uCx57c937Ay5L1n58Nb67si8tVZ5sA68tJX/Pfr7dF58tBG9d5e8+Gc6chN6LM+7spN1pos6rYs6L8+47hE7cNG6bQc9uFj7sMn4rc17cMx3atG8duj+O7B686H7cAl7cEm7sRM26cq/vz5/v767NFY7tJM78Yq8s8y3agt9dte6sVD/vz15bY59Nlb8txY9+y86LpA5LxL67pE7L5H05Ai2Z4m58Vz89RI7dKr+/XY8Ms68dx/6sZE7sRCzIEN0YwZ67wi6rk27L4k9NZB4rAz7L0j5rM66bMb682a5sJG6LEm3asy3q0w3q026sqC8cxJ6bYd685U5a457cIn7MBJ8tZW7c1I7c5K7cQ18Msu/v3678tQ3aMq7tNe6chu6rgg79VN8tNH8c0w57Q83akq7dBb9Nld9d5g6cdC8dyb675F/v327NB6////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/LvB3QAAAMFJREFUeNpiqIcAbz0ogwFKm7GgCjgyZMihCLCkc0nkIAnIMVRw2UhDBGp5fcurGOyLfbhVtJwLdJkY8oscZCsFPBk5spiNaoTC4hnqk801Qi2zLQyD2NlcWWP5GepN5TOtSxg1QwrV01itpECG2kaLy3AYiCWxcRozQWyp9pNMDWePDI4QgVpbx5eo7a+mHFOqAxUQVeRhdrLjdFFQggqo5tqVeSS456UEQgWE4/RBboxyC4AKCEI9Wu9lUl8PEGAAV7NY4hyx8voAAAAASUVORK5CYII=";

const data = ["1", "2", "3"];

export default class ImgCachePage extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: navigation.state.params.title
    });
    _keyExtractor = item => item;

    render() {
        return (
            <View style={{ flex: Screen.height }}>
                <ScrollView>
                    <Text style={{ margin: 10, fontSize: 18, color: "black" }}>
                        ImageCache
                    </Text>

                    <View style={{ flexDirection: "row" }}>
                        <CachedImage
                            source={{
                                uri:
                                    "http://d.hiphotos.baidu.com/image/pic/item/3b292df5e0fe9925279aa8433ea85edf8db1710b.jpg"
                            }}
                            style={{ width: 160, height: 160, margin: 10 }}
                        />

                        <Image
                            source={{
                                uri:
                                    "http://d.hiphotos.baidu.com/image/pic/item/3b292df5e0fe9925279aa8433ea85edf8db1710b.jpg"
                            }}
                            style={{ width: 160, height: 160, margin: 20 }}
                        />
                    </View>

                    <Text style={{ margin: 10, fontSize: 18, color: "black" }}>
                        load gif
                    </Text>

                    <View style={{ flexDirection: "row" }}>
                        <Image
                            source={{
                                uri:
                                    "http://img.zcool.cn/community/018003591d063cb5b3086ed4627878.gif"
                            }}
                            style={{ width: 160, height: 160, margin: 20 }}
                        />

                        <Image
                            source={{
                                uri:
                                    "http://img.mp.sohu.com/upload/20170704/1f673cd21b09401a9d6314cc2356a5ad_th.png"
                            }}
                            style={{ width: 160, height: 160, margin: 20 }}
                        />
                    </View>

                    <View style={{ flexDirection: "row" }}>
                        <Image
                            source={{ uri: base64Src }}
                            style={{ width: 100, height: 50, margin: 20 }}
                        />
                    </View>

                    <FlatList
                        data={data}
                        keyExtractor={this._keyExtractor}
                        renderItem={({ item }) => (
                            <Text
                                style={{
                                    margin: 10,
                                    fontSize: 22,
                                    color: "black"
                                }}
                            >
                                {item}
                            </Text>
                        )}
                    />
                </ScrollView>
            </View>
        );
    }
}
