import { DietModel, Diet, Daytime } from '../model/diet';

export async function getDiet(month: number, date: number, daytime: Daytime) {
    const ans = await DietModel.findOne({month: month, date: date, daytime: daytime})
    if(!ans) return "No Menu";
    else return ans.menus;
}
