import "@testing-library/jest-dom";
import "./src/input.css";
import { cleanup } from "@testing-library/react";
import { afterAll, afterEach, beforeEach, vi } from "vitest";

afterEach(() => {
	cleanup();
	vi.resetAllMocks();
});

afterAll(() => {
	vi.clearAllMocks();
});

beforeEach(() => {
	localStorage.clear();
});
