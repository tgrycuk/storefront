"use server";

import { getServerAuthClient } from "@/app/config";

export async function logout() {
	"use server";
	(await getServerAuthClient()).signOut();
}
